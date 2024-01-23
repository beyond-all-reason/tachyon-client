import http from "node:http";

import { generateCodeVerifier, OAuth2Client } from "@badgateway/oauth2-client";
import chalk from "chalk";
import { Signal } from "jaz-ts-utils";
import fetch from "node-fetch";
import open from "open";
import {
    getValidator,
    type RequestData,
    type RequestEndpointId,
    type ResponseEndpointId,
    type ResponseType,
    type ServiceId,
    tachyonMeta,
} from "tachyon-protocol";
import { SetOptional } from "type-fest";
import { ClientOptions, WebSocket } from "ws";

import { SteamSessionTicketResponse } from "@/model/steam-session-ticket.js";

// https://www.rfc-editor.org/rfc/rfc8252

export type LoginOptions = {
    clientId: string;
    clientSecret: string;
    callbackUrl: string;
    /** An OAuth 2 access token. This should be stored and passed back here for subsequent logins. If the token is undefined or expired, the client will be prompted to authorise. */
    //token?: TokenSet;
    /** Specify a method to open the authentication url, defaults to using https://www.npmjs.com/package/open */
    open: (url: string) => void;
    /** An abort signal which can be used to terminate the authentication process */
    abortSignal?: AbortSignal;
    /** url path that serves as the root for /.well-known/openid-configuration, defaults to \/ */
    authPath?: string;
};

const defaultLoginOptions = {
    open: (url) => open(url),
    callbackUrl: "http://127.0.0.1:3006/oauth2callback",
    authPath: "/",
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

    public connect() {
        return new Promise<void>((resolve, reject) => {
            if (this.socket && this.socket.readyState === this.socket.OPEN) {
                resolve();
            } else {
                const protocol = this.config.ssl ? "wss" : "ws";
                this.socket = new WebSocket(
                    `${protocol}://${this.config.host}${this.config.port ? ":" + this.config.port : ""}`,
                    tachyonMeta.version,
                    {
                        ...this.config,
                    }
                );

                this.socket.on("message", (message) => {
                    const response = JSON.parse(message.toString());

                    if (this.config.logging) {
                        console.log("RESPONSE", response);
                    }

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

                this.on("system", "version").add((command) => {
                    if (command.status === "success" && command.data.versionParity !== "match") {
                        console.warn(
                            chalk.yellow(
                                `Tachyon protocol version mismatch. Server is serving ${command.data.tachyonVersion} but client is using ${tachyonMeta.version}. Mismatch type: ${command.data.versionParity}`
                            )
                        );
                    }
                });

                this.socket.on("open", async () => {
                    if (this.config.logging) {
                        console.log(
                            chalk.green(
                                `Connected to ${this.config.host}:${this.config.port} using Tachyon Version ${tachyonMeta.version}`
                            )
                        );
                    }

                    resolve();
                });

                this.socket.on("close", () => {
                    console.log(chalk.red(`Disconnected from ${this.config.host}:${this.config.port}`));

                    this.responseSignals.forEach((signal) => signal.disposeAll());
                    this.responseSignals = new Map();
                    this.socket = undefined;
                });

                this.socket.on("error", (err) => {
                    reject(err);
                });
            }
        });
    }

    public request<S extends ServiceId, E extends RequestEndpointId<S> & ResponseEndpointId<S>>(
        serviceId: S,
        endpointId: E & string,
        data: RequestData<S, E>
    ): Promise<ResponseType<S, E>> {
        return new Promise((resolve) => {
            const commandId = `${serviceId}/${endpointId}/request`;
            const request = {
                command: commandId,
                data,
            };

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

            this.on(serviceId, endpointId).addOnce((data) => {
                resolve(data);
            });

            this.socket?.send(JSON.stringify(request));

            if (this.config.logging) {
                console.log("REQUEST", request);
            }
        });
    }

    public on<S extends ServiceId, E extends ResponseEndpointId<S>>(
        serviceId: S,
        endpointId: E
    ): Signal<ResponseType<S, E>> {
        const commandId = `${serviceId}/${endpointId.toString()}/response`;
        let signal = this.responseSignals.get(commandId);
        if (!signal) {
            signal = new Signal();
            this.responseSignals.set(commandId, signal);
        }

        return signal;
    }

    public waitFor<S extends ServiceId, E extends ResponseEndpointId<S>>(
        serviceId: S,
        endpointId: E
    ): Promise<ResponseType<S, E>> {
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

    public async authenticateSteamSessionTicket(sessionToken: string): Promise<SteamSessionTicketResponse> {
        const url = `${this.getServerBaseUrl()}/steamauth?ticket=${sessionToken}`;
        const res = await fetch(url);
        const data = await res.json();
        return data as SteamSessionTicketResponse;
    }

    public async auth(optionsArg: SetOptional<LoginOptions, keyof typeof defaultLoginOptions>) {
        const options: LoginOptions = { ...defaultLoginOptions, ...optionsArg };

        const client = new OAuth2Client({
            server: this.getServerBaseUrl(),
            clientId: options.clientId,
            authorizationEndpoint: `${this.getServerBaseUrl()}/oauth/authorize`,
            tokenEndpoint: `${this.getServerBaseUrl()}/oauth/access_token`,
        });

        const codeVerifier = await generateCodeVerifier();

        const authUrl = await client.authorizationCode.getAuthorizeUri({
            redirectUri: options.callbackUrl,
            codeVerifier,
        });

        options.open(authUrl);

        // const codeVerifier = await client.generateCodeVerifierAsync();

        // const authUrl = client.generateAuthUrl({
        //     scope: "openid",
        //     code_challenge_method: CodeChallengeMethod.S256,
        //     code_challenge: codeVerifier.codeChallenge,
        // });

        const callbackRequestUrl = await this.authCallback(options.callbackUrl, options.abortSignal);

        console.log(callbackRequestUrl);

        //const token = await client.getToken()

        //const callbackRequestUrl

        // const issuer = await Issuer.discover(
        //     `${this.getServerBaseUrl()}${options.authPath}.well-known/oauth-configuration`
        // );

        // const client = new issuer.Client({
        //     client_id: options.clientId,
        //     client_secret: options.clientSecret,
        //     redirect_uris: [options.callbackUrl],
        //     response_types: ["code"],
        // });

        // const code_verifier = generators.codeVerifier();
        // const url = client.authorizationUrl({
        //     scope: "openid",
        //     code_challenge: generators.codeChallenge(code_verifier),
        //     code_challenge_method: "S256",
        // });

        // options.open(url);

        // const callbackRequestUrl = await this.authCallback(options.callbackUrl, options.abortSignal);

        // const params = client.callbackParams(callbackRequestUrl);
        // const tokenSet = await client.callback(options.callbackUrl, params, {
        //     code_verifier,
        //     response_type: "code",
        // });

        // return tokenSet;
    }

    protected authCallback(callbackUrl: string, abortSignal?: AbortSignal) {
        const url = new URL(callbackUrl);

        return new Promise<string>((resolve, reject) => {
            const server = http.createServer();
            server.addListener("request", (req, res) => {
                if (req.url) {
                    const reqUrl = new URL(req.url, `http://${req.headers.host}`);

                    if (!reqUrl.searchParams.get("error")) {
                        res.writeHead(200, { "Content-Type": "text/plain" });
                        res.end("Authentication succeeded, you may close this window.");
                        resolve(req.url);
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

    protected getServerBaseUrl() {
        const schema = this.config.ssl ? "https" : "http";
        const port = this.config.port ? ":" + this.config.port : "";
        return `${schema}://${this.config.host}${port}`;
    }
}
