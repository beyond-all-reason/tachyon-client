import { createRequire } from "node:module";

import chalk from "chalk";
import { Signal } from "jaz-ts-utils";
const require = createRequire(import.meta.url);
// eslint-disable-next-line no-restricted-imports
import {
    getValidator,
    type RequestData,
    type RequestEndpointId,
    type ResponseEndpointId,
    type ResponseType,
    type ServiceId,
} from "tachyon-protocol";
import { ClientOptions, WebSocket } from "ws";
const tachyonPackage = require("tachyon-protocol/package.json");

export interface TachyonClientOptions extends ClientOptions {
    host: string;
    port: number;
    ssl?: boolean;
    logging?: boolean;
}

export class TachyonClient {
    protected socket: WebSocket;
    protected responseSignals: Map<string, Signal> = new Map();
    protected config: TachyonClientOptions;

    constructor(config: TachyonClientOptions) {
        this.config = config;

        const protocol = config.ssl ? "wss" : "ws";
        this.socket = new WebSocket(
            `${protocol}://${config.host}:${config.port}?tachyonVersion=${tachyonPackage.version}`,
            {
                ...config,
            }
        );

        this.socket.on("open", async () => {
            if (this.config.logging) {
                console.log(
                    chalk.green(
                        `Connected to ${config.host}:${config.port} using Tachyon Version ${tachyonPackage.version}`
                    )
                );
            }
        });

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
                        `Tachyon protocol version mismatch. Server is serving ${command.data.tachyonVersion} but client is using ${tachyonPackage.version}. Mismatch type: ${command.data.versionParity}`
                    )
                );
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

            this.socket.send(JSON.stringify(request));

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
}
