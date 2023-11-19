import chalk from "chalk";
import { Signal } from "jaz-ts-utils";
// eslint-disable-next-line no-restricted-imports
import {
    getValidator,
    type RequestData,
    type RequestEndpointId,
    type ResponseEndpointId,
    type ResponseType,
    type ServiceId,
    tachyonMeta,
} from "tachyon-protocol";
import { ClientOptions, WebSocket } from "ws";

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
        return new Promise<void>((resolve) => {
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
}
