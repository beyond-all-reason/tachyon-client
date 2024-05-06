import { randomUUID } from "node:crypto";

import { generateCodeVerifier, OAuth2Client, OAuth2Token } from "@badgateway/oauth2-client";
import { Signal } from "jaz-ts-utils";
import {
    EndpointId,
    GenericRequestCommand,
    GenericResponseCommand,
    RequestData,
    ResponseCommand,
    ServiceId,
    SuccessResponseData,
    tachyonMeta,
} from "tachyon-protocol";
import * as validators from "tachyon-protocol/validators";
import { SetOptional } from "type-fest";
import { ClientOptions, WebSocket } from "ws";

import { RedirectHandler } from "@/oauth2-redirect-handler.js";

export type AuthOptions = {
    /** An OAuth 2 access token. If a previous token has been generated and stored, it can be passed here to be validated or refreshed, if necessary */
    token?: OAuth2Token;
    /** If using Steam auth, pass the Session Ticket returned from ISteamUser::GetAuthTicketForWebApi here */
    steamSessionTicket?: string;
    /** Specify a method to open the authentication url, defaults to using https://www.npmjs.com/package/open */
    open?: (url: string) => Promise<unknown>;
    /** An abort signal which can be used to terminate the authentication process */
    abortSignal?: AbortSignal;
};

const defaultLoginOptions = {} satisfies Partial<AuthOptions>;

export interface TachyonClientOptions extends ClientOptions {
    host: string;
    port?: number;
    ssl?: boolean;
    logging?: boolean;
    /** Defaults to `tachyon_client`. If the OAuth server supports clients with other ids, you may specify them here */
    clientId: string;
    clientSecret?: string;
}

const defaultTachyonClientOptions = {
    clientId: "tachyon_client",
} satisfies Partial<TachyonClientOptions>;

export class TachyonClient {
    public socket?: WebSocket;
    public config: TachyonClientOptions;
    public onRequest: Signal<GenericRequestCommand> = new Signal();
    public onResponse: Signal<GenericResponseCommand> = new Signal();

    protected responseSignals: Map<string, Signal> = new Map();
    protected oauthClient: OAuth2Client;

    constructor(config: SetOptional<TachyonClientOptions, keyof typeof defaultTachyonClientOptions>) {
        this.config = { ...defaultTachyonClientOptions, ...config };

        this.oauthClient = new OAuth2Client({
            server: `http://${this.getServerBaseUrl()}`, // TODO: https, discovery, allow specifying custom address,
            clientId: config.clientId ?? "tachyon_client",
            clientSecret: config.clientSecret,
            authorizationEndpoint: "/authorize",
            tokenEndpoint: "/token",
        });
    }

    public async connect(token: string, isAutohost: true): Promise<SuccessResponseData<"autohost", "connected">>;
    public async connect(token: string, isAutohost: false): Promise<SuccessResponseData<"system", "connected">>;
    public async connect(token: string): Promise<SuccessResponseData<"system", "connected">>;
    public async connect(
        token: string,
        isAutohost = false
    ): Promise<SuccessResponseData<"system", "connected"> | SuccessResponseData<"autohost", "connected">> {
        return new Promise((resolve, reject) => {
            if (this.socket && this.socket.readyState === this.socket.OPEN) {
                reject("already_connected");
                return;
            }

            const wsPrefix = this.config.ssl ? "wss" : "ws";
            const address = `${wsPrefix}://${this.getServerBaseUrl()}`;

            let serverProtocol: string | undefined;

            this.socket = new WebSocket(address, `tachyon-${tachyonMeta.version}`, {
                ...this.config,
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            this.socket.on("unexpected-response", async (req, res) => {
                console.log(res);
                res.on("data", (chunk: Buffer) => {
                    const error = `HTTP Error ${res.statusCode}: ${chunk.toString()}`;
                    reject(error);
                });
            });

            this.socket.on("upgrade", (response) => {
                serverProtocol = response.headers["sec-websocket-protocol"];
            });

            this.socket.addEventListener("message", async (message) => {
                const response = JSON.parse(message.data.toString());

                this.log("RESPONSE", response);

                if (
                    typeof response !== "object" ||
                    !response ||
                    !("commandId" in response) ||
                    typeof response.commandId !== "string"
                ) {
                    throw new Error(`Invalid command received`);
                }

                const commandId = response.commandId;

                const [serviceId, endpointId, commandType] = commandId.split("/");

                const validator = validators[`${serviceId}_${endpointId}_${commandType}` as keyof typeof validators];

                if (!validator) {
                    console.error(`No validator found for ${commandId}`);
                    return;
                }

                const isValid = validator(response);
                if (!isValid) {
                    console.error(`Command validation failed for ${commandId}`);
                    console.error(validator.errors);
                }

                const signal = this.responseSignals.get(response.commandId);
                if (signal) {
                    signal.dispatch(response);
                    this.onResponse.dispatch(response as GenericResponseCommand);
                }
            });

            this.socket.addEventListener("open", async (event) => {
                this.log(`Connected to http://${this.getServerBaseUrl()} using Tachyon Version ${tachyonMeta.version}`);
            });

            let disconnectReason: string;

            this.socket.addEventListener("close", (event) => {
                if (!disconnectReason) {
                    if (event.reason.toString()) {
                        disconnectReason = event.reason.toString();
                    } else if (event.code === 1006) {
                        disconnectReason = "Lost connection to server";
                    } else if (event.code) {
                        disconnectReason = event.code.toString();
                    } else {
                        disconnectReason = "Unknown server error";
                    }
                }

                this.responseSignals.forEach((signal) => signal.disposeAll());
                this.responseSignals.clear();
                this.socket = undefined;

                reject(disconnectReason);
            });

            this.socket.addEventListener("error", (err) => {
                if (err.message.includes("invalid subprotocol")) {
                    disconnectReason = `Tachyon server protocol version (${serverProtocol}) is incompatible with this client (tachyon-${tachyonMeta.version})`;
                } else if (err.message.includes("ECONNREFUSED")) {
                    disconnectReason = `Could not connect to server at http://${this.getServerBaseUrl()}`;
                } else {
                    disconnectReason = err.message;
                }
            });

            if (isAutohost) {
                this.on("autohost", "connected").add((response) => {
                    if (response.status === "success") {
                        resolve({} as never);
                    } else {
                        reject(response.reason);
                    }
                });
            } else {
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

    public async request<S extends ServiceId, E extends EndpointId<S> & string>(
        ...args: RequestData<S, E> extends never
            ? [serviceId: S, endpointId: E]
            : [serviceId: S, endpointId: E, data: RequestData<S, E>]
    ): Promise<ResponseCommand<S, E>> {
        const serviceId = args[0];
        const endpointId = args[1];
        const data = args[2];

        const commandId = `${serviceId}/${endpointId as string}/request`;
        const messageId = randomUUID();
        const request: GenericRequestCommand = { commandId, messageId };
        const validator = validators[`${serviceId}_${endpointId}_request` as keyof typeof validators];

        if (data) {
            request.data = data;
        }

        const isValid = validator(request);
        if (!isValid) {
            console.error(`Command validation failed for ${commandId}`);
            console.error(validator.errors);
        }

        this.socket?.send(JSON.stringify(request));
        this.onRequest.dispatch(request);

        this.log("REQUEST", request);

        return new Promise((resolve) => {
            this.on(serviceId, endpointId).addOnce((response) => {
                if (response.messageId === messageId) {
                    resolve(response);
                }
            });
        });
    }

    public on<S extends ServiceId, E extends EndpointId<S>>(
        serviceId: S,
        endpointId: E
    ): Signal<ResponseCommand<S, E> & { messageId: string }> {
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

    public async auth(optionsArg?: SetOptional<AuthOptions, keyof typeof defaultLoginOptions>): Promise<OAuth2Token> {
        const options: AuthOptions = { ...defaultLoginOptions, ...optionsArg };

        if (options.steamSessionTicket) {
            return this.steamAuth(options.steamSessionTicket, options.abortSignal);
        }

        const redirectHandler = new RedirectHandler(options.abortSignal);
        const redirectUri = await redirectHandler.getRedirectUrl();

        if (options.token) {
            if (options.token.expiresAt && Date.now() > options.token.expiresAt) {
                this.log("Access token expired");
                if (options.token.refreshToken) {
                    this.log("Fetching refresh token");
                    return this.oauthClient.refreshToken(options.token);
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

        const authUrl = await this.oauthClient.authorizationCode.getAuthorizeUri({
            redirectUri: redirectUri,
            codeVerifier,
            scope: ["tachyon.lobby"],
        });

        if (!options.open) {
            const open = await import("open");
            options.open = open.default;
        }

        await options.open(authUrl);

        const callbackRequestUrl = await redirectHandler.waitForCallback();

        const code = callbackRequestUrl.searchParams.get("code");
        if (!code) {
            throw new Error("code parameter is missing from local callback request");
        }

        const token = await this.oauthClient.authorizationCode.getToken({
            code,
            redirectUri: redirectUri,
            codeVerifier,
        });

        return token;
    }

    public async steamAuth(steamSessionTicket: string, abortSignal?: AbortSignal): Promise<OAuth2Token> {
        const response = await fetch(`http://${this.getServerBaseUrl()}/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
                client_id: this.config.clientId,
                scope: "tachyon.lobby",
                requested_token_type: "urn:ietf:params:oauth:token-type:access_token",
                subject_token_type: "urn:ietf:oauth:token-type:steam_session_ticket",
                subject_token: steamSessionTicket,
            }),
        });

        const obj = await response.json();

        if (this.isTokenResponse(obj)) {
            return {
                accessToken: obj.access_token,
                expiresAt: obj.expires_in ? Date.now() + obj.expires_in * 1000 : null,
                refreshToken: obj.refresh_token ?? null,
            };
        } else if (this.isError(obj)) {
            if (obj.message.includes("user_not_found")) {
                throw new Error("user_not_found");
            }

            throw new Error(`HTTP ${response.status} ${obj.error}: ${obj.message}`);
        }

        throw new Error("Error getting OAuth Token");
    }

    public async autohostAuth(): Promise<OAuth2Token> {
        const token = await this.oauthClient.clientCredentials({
            scope: ["tachyon.autohost"],
        });

        return token;
    }

    // TODO
    public async register(options: { steamSessionTicket: string; username: string }) {
        //if (options.steamSessionTicket) {
        const registerResponse = await fetch(`http://${this.getServerBaseUrl()}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: options.username,
                steamSessionTicket: options.steamSessionTicket,
            }),
        });

        console.log(registerResponse.status);
        //}
    }

    protected log(...args: Parameters<typeof console.log>) {
        if (this.config.logging) {
            console.log(...args);
        }
    }

    protected isError(obj: unknown): obj is { statusCode: number; error: string; message: string } {
        return typeof obj === "object" && obj !== null && "error" in obj && "message" in obj;
    }

    protected isTokenResponse(
        obj: unknown
    ): obj is { access_token: string; expires_in: number; refresh_token?: string; scope?: string } {
        return typeof obj === "object" && obj !== null && "access_token" in obj;
    }
}
