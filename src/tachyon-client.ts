import http from "node:http";

import { generateCodeVerifier, OAuth2Client, OAuth2Token } from "@badgateway/oauth2-client";
import { randomUUID } from "crypto";
import { Signal } from "jaz-ts-utils";
import open from "open";
import {
    EndpointId,
    GenericRequestCommand,
    getValidator,
    RequestData,
    ResponseCommand,
    ServiceId,
    SuccessResponseData,
    tachyonMeta,
} from "tachyon-protocol";
import { SetOptional } from "type-fest";
import { ClientOptions, WebSocket } from "ws";

export type LoginOptions = {
    /** An OAuth 2 access token. This should be stored and passed back here for subsequent logins. If the token is undefined or expired, the client will be prompted to authorise. */
    token?: OAuth2Token;
    /** Defaults to `tachyon_client`. If the OAuth server supports clients with other ids, you may specify them here */
    clientId: string;
    /** This client spawns a temporary http server during the authorization process in order to receive the auth code. https://www.rfc-editor.org/rfc/rfc8252#section-8.3 */
    localCallbackUrl: string;
    /** Specify a method to open the authentication url, defaults to using https://www.npmjs.com/package/open */
    open: (url: string) => void;
    /** An abort signal which can be used to terminate the authentication process */
    abortSignal?: AbortSignal;
};

const defaultLoginOptions = {
    clientId: "tachyon_client",
    open: (url) => open(url),
    localCallbackUrl: "http://127.0.0.1:3006/oauth2callback",
} satisfies Partial<LoginOptions>;

export interface TachyonClientOptions extends ClientOptions {
    host: string;
    port?: number;
    ssl?: boolean;
    logging?: boolean;
}

export class TachyonClient {
    public socket?: WebSocket;
    public config: TachyonClientOptions;

    protected responseSignals: Map<string, Signal> = new Map();

    constructor(config: TachyonClientOptions) {
        this.config = config;
    }

    public async connect(steamSessionTicket: string): Promise<SuccessResponseData<"system", "connected">> {
        return new Promise((resolve, reject) => {
            if (this.socket && this.socket.readyState === this.socket.OPEN) {
                reject("already_connected");
            } else {
                const wsPrefix = this.config.ssl ? "wss" : "ws";
                let serverProtocol: string | undefined;

                this.socket = new WebSocket(
                    `${wsPrefix}://${this.getServerBaseUrl()}`,
                    `tachyon-${tachyonMeta.version}`,
                    {
                        ...this.config,
                        headers: {
                            authorization: `Basic ${steamSessionTicket}`,
                        },
                    }
                );

                this.socket.on("upgrade", (response) => {
                    serverProtocol = response.headers["sec-websocket-protocol"];
                });

                this.socket.addEventListener("message", (message) => {
                    const response = JSON.parse(message.toString());

                    this.log("RESPONSE", response);

                    const commandId: string = response.command;
                    if (!commandId || typeof commandId !== "string") {
                        throw new Error(`Invalid command received`);
                    }

                    const validator = getValidator(response);
                    const isValid = validator(response);
                    if (!isValid) {
                        console.error(`Command validation failed for ${commandId}`);
                        if (validator.errors) {
                            for (const error of validator.errors) {
                                console.error(error);
                            }
                        }
                    }

                    const signal = this.responseSignals.get(response.command);
                    if (signal) {
                        signal.dispatch(response);
                    }
                });

                this.socket.addEventListener("open", async () => {
                    this.log(
                        `Connected to http://${this.getServerBaseUrl()} using Tachyon Version ${tachyonMeta.version}`
                    );
                });

                this.socket.addEventListener("close", (event) => {
                    this.log(
                        `Disconnected from http://${this.getServerBaseUrl()} (${event.reason.toString() ?? event.code})`
                    );

                    this.responseSignals.forEach((signal) => signal.disposeAll());
                    this.responseSignals.clear();
                    this.socket = undefined;
                });

                this.socket.addEventListener("error", (err) => {
                    if (err instanceof Error && err.message === "Server sent an invalid subprotocol") {
                        reject(
                            `Tachyon server protocol version (${serverProtocol}) is incompatible with this client (tachyon-${tachyonMeta.version})`
                        );
                    } else if (err.message.includes("ECONNREFUSED")) {
                        reject(`Could not connect to server at http://${this.getServerBaseUrl()}`);
                    } else {
                        reject(err);
                    }
                });

                this.on("system", "connected").add((response) => {
                    if (response.status === "success") {
                        resolve(response.data);
                    } else {
                        reject(response.reason);
                    }
                });
            }
        });
    }

    public request<S extends ServiceId, E extends EndpointId<S>>(
        ...args: RequestData<S, E> extends never
            ? [serviceId: S, endpointId: E]
            : [serviceId: S, endpointId: E, data: RequestData<S, E>]
    ): Promise<ResponseCommand<S, E>> {
        return new Promise((resolve) => {
            const serviceId = args[0];
            const endpointId = args[1];
            const data = args[2];

            const commandId = `${serviceId}/${endpointId as string}/request`;
            const messageId = randomUUID();
            const request: GenericRequestCommand = { commandId, messageId };

            if (data) {
                Object.assign(request, data);
            }

            const validator = getValidator(request);
            const isValid = validator(request);
            if (!isValid) {
                console.error(`Command validation failed for ${commandId}`);
                if (validator.errors) {
                    for (const error of validator.errors) {
                        console.error(error);
                    }
                }
            }

            this.on(serviceId, endpointId).addOnce((response) => {
                if (response.messageId === messageId) {
                    resolve(response);
                }
            });

            this.socket?.send(JSON.stringify(request));

            this.log("REQUEST", request);
        });
    }

    public on<S extends ServiceId, E extends EndpointId<S>>(
        serviceId: S,
        endpointId: E
    ): Signal<ResponseCommand<S, E>> {
        const commandId = `${serviceId}/${endpointId.toString()}/response`;
        let signal = this.responseSignals.get(commandId);
        if (!signal) {
            signal = new Signal();
            this.responseSignals.set(commandId, signal);
        }

        return signal;
    }

    public waitFor<S extends ServiceId, E extends EndpointId<S>>(
        serviceId: S,
        endpointId: E
    ): Promise<ResponseCommand<S, E>> {
        return new Promise((resolve) => {
            this.on(serviceId, endpointId).addOnce((data) => {
                resolve(data);
            });
        });
    }

    public isConnected(): boolean {
        if (!this.socket) {
            return false;
        }

        return this.socket.readyState === this.socket.OPEN;
    }

    public disconnect() {
        this.socket?.close();
    }

    public getServerBaseUrl() {
        const port = this.config.port ? ":" + this.config.port : "";
        return `${this.config.host}${port}`;
    }

    public async auth(optionsArg?: SetOptional<LoginOptions, keyof typeof defaultLoginOptions>): Promise<OAuth2Token> {
        const options: LoginOptions = { ...defaultLoginOptions, ...optionsArg };

        // https://github.com/badgateway/oauth2-client

        const client = new OAuth2Client({
            server: `http://${this.getServerBaseUrl()}`, // TODO: https
            clientId: options.clientId,
            authorizationEndpoint: "/authorize",
            tokenEndpoint: "/token",
        });

        if (options.token) {
            if (options.token.expiresAt && Date.now() > options.token.expiresAt) {
                this.log("Access token expired");
                if (options.token.refreshToken) {
                    this.log("Fetching refresh token");
                    return client.refreshToken(options.token);
                } else {
                    this.log("No refresh token available");
                }
            } else {
                this.log("Using existing token");
            }
            return options.token;
        }

        this.log("Getting fresh access token - User auth required");

        const codeVerifier = await generateCodeVerifier();

        const authUrl = await client.authorizationCode.getAuthorizeUri({
            redirectUri: options.localCallbackUrl,
            codeVerifier,
            scope: ["tachyon.lobby"],
        });

        options.open(authUrl);

        const callbackRequestUrl = await this.authCallback(options.localCallbackUrl, options.abortSignal);

        const code = callbackRequestUrl.searchParams.get("code")!;

        const token = await client.authorizationCode.getToken({
            code,
            redirectUri: options.localCallbackUrl,
            codeVerifier,
        });

        return token;
    }

    // https://www.rfc-editor.org/rfc/rfc8252#section-8.3
    // https://datatracker.ietf.org/doc/html/rfc8252#section-7.3
    protected authCallback(callbackUrl: string, abortSignal?: AbortSignal): Promise<URL> {
        const url = new URL(callbackUrl);

        return new Promise((resolve, reject) => {
            const server = http.createServer();
            server.addListener("request", (req, res) => {
                if (req.url) {
                    const reqUrl = new URL(req.url, `http://${req.headers.host}`);

                    if (!reqUrl.searchParams.get("error")) {
                        res.writeHead(200, { "Content-Type": "text/plain" });
                        res.end("Authentication succeeded, you may close this window.");
                        resolve(reqUrl);
                    } else {
                        res.writeHead(400, { "Content-Type": "text/plain" });
                        res.end(
                            `Authentication callback failed: ${
                                reqUrl.searchParams.get("error_description") || reqUrl.searchParams.get("error")
                            }`
                        );
                        reject("auth failed");
                    }
                }

                server.close();
                server.closeAllConnections();
            });

            server.listen({
                host: url.hostname,
                port: url.port,
            });

            abortSignal?.addEventListener("abort", () => {
                server.close();
                server.closeAllConnections();
                reject("aborted");
            });
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected log(message?: any, ...optionalParams: any[]) {
        if (this.config.logging) {
            console.log(message, ...optionalParams);
        }
    }
}
