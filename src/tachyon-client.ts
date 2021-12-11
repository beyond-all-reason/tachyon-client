import { Static } from "@sinclair/typebox";
import { Signal } from "jaz-ts-utils";
import * as tls from "tls";
import * as gzip from "zlib";

import { clientCommandSchema } from "~/model/commands/client-commands";
import { serverCommandSchema } from "~/model/commands/server-commands";

export interface TachyonClientOptions extends tls.ConnectionOptions {
    host: string;
    port: number;
    verbose?: boolean;
    pingIntervalMs?: number;
}

export const defaultTachyonClientOptions: Partial<TachyonClientOptions> = {
    pingIntervalMs: 30000
};

export type ClientCommandType<T> = T extends keyof typeof clientCommandSchema ? Static<typeof clientCommandSchema[T]> : void;
export type ServerCommandType<T> = T extends keyof typeof serverCommandSchema ? Static<typeof serverCommandSchema[T]> : void;

// TODO: reduce the complexity and repeated information with this and the .addClientCommand calls using constraint identify functions
export interface TachyonClient {
    [key: string]: unknown;
    ping(): Promise<ServerCommandType<"s.system.pong">>;
    register(options: ClientCommandType<"c.auth.register">): Promise<ServerCommandType<"s.auth.register">>;
    getToken(options: ClientCommandType<"c.auth.get_token">): Promise<ServerCommandType<"s.auth.get_token">>;
    login(options: ClientCommandType<"c.auth.login">): Promise<ServerCommandType<"s.auth.login">>;
    verify(options: ClientCommandType<"c.auth.verify">): Promise<ServerCommandType<"s.auth.verify">>;
    disconnect(options: ClientCommandType<"c.auth.disconnect">): Promise<void>;
    getBattles(options: ClientCommandType<"c.lobby.query">): Promise<ServerCommandType<"s.lobby.query">>;
}

export class TachyonClient {
    public config: TachyonClientOptions;
    public socket?: tls.TLSSocket;
    public tachyonModeEnabled = false;
    //public onCommand: Signal<{ [key: string]: unknown, cmd: string; }> = new Signal();

    protected pingIntervalId?: NodeJS.Timeout;
    protected requestSignals: Map<keyof typeof clientCommandSchema, Signal<unknown>> = new Map();
    protected responseSignals: Map<keyof typeof serverCommandSchema, Signal<unknown>> = new Map();
    protected _isLoggedIn = false;

    constructor(options: TachyonClientOptions) {
        this.config = Object.assign({}, defaultTachyonClientOptions, options);

        if (options.rejectUnauthorized === undefined && this.config.host === "localhost") {
            this.config.rejectUnauthorized = false;
        }

        this.addCommand("disconnect", "c.auth.disconnect");
        this.addCommand("ping", "c.system.ping", "s.system.pong");
        this.addCommand("register", "c.auth.register", "s.auth.register");
        this.addCommand("getToken", "c.auth.get_token", "s.auth.get_token");
        this.addCommand("login", "c.auth.login", "s.auth.login");
        this.addCommand("verify", "c.auth.verify", "s.auth.verify");
        this.addCommand("getBattles", "c.lobby.query", "s.lobby.query");
    }

    public async connect() {
        return new Promise<void>((resolve, reject) => {
            if (this.socket && this.socket.readable) {
                resolve(); // already connected
                return;
            }

            this.socket = tls.connect(this.config);

            this.socket.on("data", (dataBuffer: Buffer) => {
                if (!this.tachyonModeEnabled) {
                    const dataParts = dataBuffer.toString("utf8").split("\n");
                    for (const dataPart of dataParts) {
                        if (dataPart.slice(0, 2) === "OK") {
                            this.tachyonModeEnabled = true;

                            this.pingIntervalId = setInterval(() => {
                                this.ping();
                            }, this.config.pingIntervalMs);

                            if (this.config.verbose) {
                                console.log("tachyonModeEnabled");
                            }

                            resolve();
                            return;
                        }
                    }
                }

                const data = dataBuffer.toString("utf8");
                const gzipped = Buffer.from(data, "base64");
                const response = gzip.unzipSync(gzipped);
                const jsonString = response.toString("utf8");
                const command = JSON.parse(jsonString);
                if (this.config.verbose) {
                    console.log("RESPONSE:", command);
                }

                const responseSignal = this.responseSignals.get(command.cmd);
                if (responseSignal) {
                    responseSignal.dispatch(command);
                }
            });

            this.socket.on("secureConnect", () => {
                if (this.config.verbose) {
                    console.log("secureConnect");
                }
            });

            this.socket.on("close", (data) => {
                this._isLoggedIn = false;
                if (this.config.verbose) {
                    console.log("close", data);
                }
            });

            this.socket.on("error", (err) => {
                this._isLoggedIn = false;
                if (this.config.verbose) {
                    console.log("error", err);
                }
                reject(err);
            });

            this.socket.on("timeout", (data) => {
                this._isLoggedIn = false;
                if (this.config.verbose) {
                    console.log("timeout", data);
                }
            });

            this.socket.on("end", (data) => {
                this._isLoggedIn = false;
                if (this.config.verbose) {
                    console.log("end", data);
                }
            });

            this.onResponse("s.auth.login").add((data) => {
                if (data.result === "success") {
                    this._isLoggedIn = true;
                }
            });

            this.onRequest("c.auth.disconnect").add(() => {
                this._isLoggedIn = false;
            });

            this.socket.write("TACHYON" + "\n", "utf8");
        });
    }

    public onRequest<T extends keyof typeof clientCommandSchema>(type: T) : Signal<ClientCommandType<T>> {
        if (!this.requestSignals.has(type)) {
            this.requestSignals.set(type, new Signal());
        }
        return this.requestSignals.get(type) as Signal<ClientCommandType<T>>;
    }

    public onResponse<T extends keyof typeof serverCommandSchema>(type: T) : Signal<ServerCommandType<T>> {
        if (!this.responseSignals.has(type)) {
            this.responseSignals.set(type, new Signal());
        }
        return this.responseSignals.get(type) as Signal<ServerCommandType<T>>;
    }

    public isLoggedIn() {
        return this._isLoggedIn;
    }

    protected rawRequest(request: Record<string, unknown>) {
        const jsonString = JSON.stringify(request);
        const gzipped = gzip.gzipSync(jsonString);
        const base64 = Buffer.from(gzipped).toString("base64");

        if (this.config.verbose) {
            console.log("REQUEST:", request);
        }

        this.socket?.write(base64 + "\n");
    }

    protected addCommand<C extends keyof typeof clientCommandSchema, S extends keyof typeof serverCommandSchema, Args = Static<typeof clientCommandSchema[C]> extends Record<string, never> ? undefined : Static<typeof clientCommandSchema[C]>>(name: string, clientCmd: C, serverCmd?: S) {
        TachyonClient.prototype[name] = function(args?: Args) : Promise<ServerCommandType<S> | void> {
            return new Promise(resolve => {
                if (serverCmd) {
                    const signalBinding = this.onResponse(serverCmd).add((data) => {
                        signalBinding.destroy();
                        resolve(data);
                    });

                    this.rawRequest({
                        cmd: clientCmd,
                        ...args
                    });
                } else {
                    this.rawRequest({
                        cmd: clientCmd,
                        ...args
                    });
                    resolve();
                }
            });
        };
    }
}