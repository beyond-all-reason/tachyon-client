import { randomUUID } from "node:crypto";

import { generateCodeVerifier, OAuth2Client, OAuth2Token } from "@badgateway/oauth2-client";
import { Signal } from "jaz-ts-utils";
import {
    AutohostConnectedEvent,
    GetCommandData,
    GetCommandIds,
    GetCommands,
    SystemConnectedEvent,
    TachyonCommand,
    tachyonMeta,
    TachyonRequest,
    TachyonResponse,
} from "tachyon-protocol";
import * as validators from "tachyon-protocol/validators";
import { SetOptional } from "type-fest";
import { ClientOptions, MessageEvent, WebSocket } from "ws";

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

type TachyonClientActor = "user" | "autohost";

export interface TachyonClientOptions<Actor extends TachyonClientActor> {
    host: string;
    /** Defaults to `tachyon_client`. If the OAuth server supports clients with other ids, you may specify them here */
    clientId: string;
    /** Required request handlers. These need to be implemented as the other actor expects a response */
    requestHandlers: {
        [CommandId in GetCommandIds<"server", Actor, "request">]: (
            data: GetCommandData<GetCommands<"server", Actor, "request", CommandId>>
        ) => Promise<GetCommandData<GetCommands<Actor, "server", "response", CommandId>>>;
    };
    port?: number;
    clientSecret?: string;
    ssl?: boolean;
    logging?: boolean;
    webSocketOptions?: ClientOptions;
}

const defaultTachyonClientOptions = {
    clientId: "tachyon_client",
} satisfies Partial<TachyonClientOptions<TachyonClientActor>>;

export class TachyonClient<Actor extends TachyonClientActor> {
    public readonly actorType: Actor;
    public socket?: WebSocket;
    public config: TachyonClientOptions<Actor>;

    protected oauthClient: OAuth2Client;
    protected responseHandlers: Map<string, Signal<GetCommands<"server", Actor, "response">>> = new Map();
    protected eventHandlers: Map<string, Signal<GetCommands<"server", Actor, "event">>> = new Map();

    constructor(actorType: Actor, config: SetOptional<TachyonClientOptions<Actor>, keyof typeof defaultTachyonClientOptions>) {
        this.actorType = actorType;
        this.config = { ...defaultTachyonClientOptions, ...config };

        this.oauthClient = new OAuth2Client({
            server: `http://${this.getServerBaseUrl()}`, // TODO: https, discovery, allow specifying custom address,
            clientId: config.clientId ?? "tachyon_client",
            clientSecret: config.clientSecret,
            authorizationEndpoint: "/authorize",
            tokenEndpoint: "/token",
        });
    }

    public async connect(token: string): Promise<Actor extends "user" ? SystemConnectedEvent["data"] : AutohostConnectedEvent["data"]>;
    public async connect(token: string): Promise<SystemConnectedEvent["data"] | AutohostConnectedEvent["data"]> {
        return new Promise((resolve, reject) => {
            if (this.socket && this.socket.readyState === this.socket.OPEN) {
                reject("already_connected");
                return;
            }

            const wsPrefix = this.config.ssl ? "wss" : "ws";
            const address = `${wsPrefix}://${this.getServerBaseUrl()}`;

            let serverProtocol: string | undefined;

            this.socket = new WebSocket(address, `tachyon-${tachyonMeta.version}`, {
                ...this.config.webSocketOptions,
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

            this.socket.addEventListener("message", (message) => {
                try {
                    this.handleMessage(message);
                } catch (err) {
                    console.error(`Error handling message: ${err}`);
                    console.error(message.data.toString());
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

            if (this.actorType === "user") {
                this.onEvent("system/connected").addOnce((event) => {
                    resolve((event as SystemConnectedEvent).data);
                });
            } else if (this.actorType === "autohost") {
                this.onEvent("autohost/connected").addOnce((event) => {
                    resolve((event as AutohostConnectedEvent).data);
                });
            }
        });
    }

    public async request<C extends GetCommandIds<Actor, "server", "request">>(
        ...args: GetCommandData<GetCommands<Actor, "server", "request", C>> extends never
            ? [commandId: C]
            : [commandId: C, data: GetCommandData<GetCommands<Actor, "server", "request", C>>]
    ): Promise<GetCommands<"server", Actor, "response", C>> {
        if (!this.socket) {
            throw new Error("Not connected to server");
        }

        const [commandId, data] = args as [C, GetCommandData<GetCommands<Actor, "server", "request", C>> | undefined];

        const messageId = randomUUID();

        const request = {
            type: "request",
            commandId,
            messageId,
        } as GetCommands<Actor, "server", "request", C>;

        if (data) {
            Object.assign(request, { data });
        }

        this.validateCommand(request);

        this.socket.send(JSON.stringify(request));

        this.log("REQUEST", request);

        return new Promise((resolve) => {
            this.onResponse(commandId).addOnce((response) => {
                if (response.messageId === messageId) {
                    resolve(response as GetCommands<"server", Actor, "response", C>);
                }
            });
        });
    }

    /** Add handler for incoming event */
    public onEvent(commandId: GetCommandIds<"server", Actor, "event">): Signal<GetCommands<"server", Actor, "event", typeof commandId>> {
        let signal = this.eventHandlers.get(commandId);
        if (!signal) {
            signal = new Signal();
            this.eventHandlers.set(commandId, signal);
        }
        return signal;
    }

    /** Add handler for incoming response */
    public onResponse(commandId: GetCommandIds<"server", Actor, "response">): Signal<GetCommands<"server", Actor, "response", typeof commandId>> {
        let signal = this.responseHandlers.get(commandId);
        if (!signal) {
            signal = new Signal();
            this.responseHandlers.set(commandId, signal);
        }
        return signal;
    }

    protected handleMessage(message: MessageEvent) {
        const obj = JSON.parse(message.data.toString());

        if (!this.isCommand(obj)) {
            throw new Error(`Message does not match expected command structure`);
        }

        if (obj.type === "request") {
            this.handleRequest(obj);
        } else if (obj.type === "response") {
            this.handleResponse(obj);
        } else if (obj.type === "event") {
            this.handleEvent(obj);
        } else {
            throw new Error(`Unknown command type: ${obj.type}`);
        }
    }

    /** Execute handler for incoming request */
    protected async handleRequest(command: TachyonRequest) {
        const handler = this.config.requestHandlers[command.commandId as keyof typeof this.config.requestHandlers] as unknown as (
            data: unknown
        ) => Promise<TachyonResponse>;

        if (!handler) {
            throw new Error(`No response handler found for: ${command.commandId}`);
        }

        let response: TachyonResponse;
        if ("data" in command) {
            response = await handler(command.data);
        } else {
            response = await handler(command);
        }

        this.validateCommand(response);

        this.log("RESPONSE", response);

        this.socket?.send(JSON.stringify(response));
    }

    /** Execute handler for incoming response */
    protected async handleResponse(command: GetCommands<"server", Actor, "response">) {
        const signal = this.responseHandlers.get(command.commandId);
        if (signal) {
            signal.dispatch(command);
        }
    }

    /** Execute handler for incoming event */
    protected async handleEvent(command: GetCommands<"server", Actor, "event">) {
        const signal = this.eventHandlers.get(command.commandId);
        if (signal) {
            signal.dispatch(command);
        }
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

    public async auth(options: AuthOptions): Promise<OAuth2Token> {
        if (options.steamSessionTicket) {
            return this.steamAuth(options.steamSessionTicket);
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

    public async steamAuth(steamSessionTicket: string): Promise<OAuth2Token> {
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

        if (!response.headers.get("content-type")?.includes("application/json")) {
            const text = await response.text();
            throw new Error(`SteamAuth Error: HTTP ${response.status}: ${text}`);
        }

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

        throw new Error(`Unknown error getting OAuth Token: ${obj}`);
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

    protected validateCommand(command: TachyonCommand) {
        const commandId = command.commandId;
        const validatorId = `${commandId}/${command.type}/${command.type}`.replace("/", "_") as keyof typeof validators;
        const validator = validators[validatorId];

        if (!validator) {
            throw new Error(`No validator found with id: ${validatorId}`);
        }

        const isValid = validator(command);
        if (!isValid) {
            console.error(validator.errors);
            throw new Error(`Command validation failed for: ${commandId}`);
        }
    }

    protected isCommand(obj: unknown): obj is TachyonCommand {
        return typeof obj === "object" && obj !== null && "commandId" in obj && "messageId" in obj && "type" in obj;
    }

    protected log(...args: Parameters<typeof console.log>) {
        if (this.config.logging) {
            console.log(...args);
        }
    }

    protected isError(obj: unknown): obj is { statusCode: number; error: string; message: string } {
        return typeof obj === "object" && obj !== null && "status" in obj;
    }

    protected isTokenResponse(obj: unknown): obj is { access_token: string; expires_in: number; refresh_token?: string; scope?: string } {
        return typeof obj === "object" && obj !== null && "access_token" in obj;
    }
}
