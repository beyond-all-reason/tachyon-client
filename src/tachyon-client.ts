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
}

export const defaultTachyonClientOptions: Partial<TachyonClientOptions> = {
};

export type ClientCommandType<T> = T extends keyof typeof clientCommandSchema ? Static<typeof clientCommandSchema[T]> : void;
export type ServerCommandType<T> = T extends keyof typeof serverCommandSchema ? Static<typeof serverCommandSchema[T]> : void;

export interface TachyonClient {
    [key: string]: unknown;
    ping(): Promise<ServerCommandType<"s.system.pong">>;
    getToken(options: ClientCommandType<"c.auth.get_token">): Promise<ServerCommandType<"s.auth.get_token">>;
}

export class TachyonClient {
    protected config: TachyonClientOptions;
    protected socket: tls.TLSSocket;
    protected tachyonModeEnabled = false;
    protected onCommand: Signal<{ [key: string]: unknown, cmd: string; }> = new Signal();

    constructor(options: TachyonClientOptions) {
        this.config = Object.assign({}, defaultTachyonClientOptions, options);

        this.addClientCommand("ping", "c.system.ping", "s.system.pong");
        this.addClientCommand("getToken", "c.auth.get_token", "s.auth.get_token");

        this.socket = tls.connect(this.config);

        this.socket.on("data", (dataBuffer: Buffer) => {
            if (!this.tachyonModeEnabled) {
                return;
            }
            const data = dataBuffer.toString("utf8");
            const gzipped = Buffer.from(data, "base64");
            const response = gzip.unzipSync(gzipped);
            const jsonString = response.toString("utf8");
            const command = JSON.parse(jsonString);
            if (this.config.verbose) {
                console.log("RESPONSE:", command);
            }
            this.onCommand.dispatch(command);
        });

        this.socket.on("secureConnect", () => {
            if (this.config.verbose) {
                console.log("Connected!");
            }
        });

        this.socket.on("close", () => {
            if (this.config.verbose) {
                console.log("close");
            }
        });

        this.socket.on("error", (err) => {
            if (this.config.verbose) {
                console.log("error", err);
            }
        });

        this.socket.on("timeout", () => {
            if (this.config.verbose) {
                console.log("timeout");
            }
        });

        this.socket.on("end", () => {
            if (this.config.verbose) {
                console.log("end");
            }
        });
    }

    public async connect() {
        return new Promise<void>(resolve => {
            const onData = (dataBuffer: Buffer) => {
                const dataParts = dataBuffer.toString("utf8").split("\n");
                for (const dataPart of dataParts) {
                    if (dataPart.slice(0, 2) === "OK") {
                        this.tachyonModeEnabled = true;
                        this.socket.off("data", onData);
                        resolve();
                        return;
                    }
                }
            };

            this.socket.on("data", onData);

            this.socket.write("TACHYON" + "\n", "utf8");
        });
    }

    public rawRequest(request: Record<string, unknown>) {
        const jsonString = JSON.stringify(request);
        const gzipped = gzip.gzipSync(jsonString);
        const base64 = Buffer.from(gzipped).toString("base64");

        if (this.config.verbose) {
            console.log("REQUEST:", request);
        }

        this.socket.write(base64 + "\n");
    }

    protected addClientCommand<C extends keyof typeof clientCommandSchema, S extends keyof typeof serverCommandSchema, Args = Static<typeof clientCommandSchema[C]> extends Record<string, never> ? undefined : Static<typeof clientCommandSchema[C]>>(name: string, clientCmd: C, serverCmd?: S) {
        TachyonClient.prototype[name] = function(args?: Args) : Promise<ServerCommandType<S> | void> {
            return new Promise(resolve => {
                if (serverCmd) {
                    const onCommand = this.onCommand.add((command) => {
                        if (command.cmd === serverCmd) {
                            onCommand.destroy();
                            resolve(command as ServerCommandType<S>);
                        }
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