import { ValidateFunction } from "ajv";
import chalk from "chalk";
import { Signal } from "jaz-ts-utils";
// eslint-disable-next-line no-restricted-imports
import type { RequestData, RequestEndpointId, ResponseEndpointId, ResponseType, ServiceId } from "tachyon-protocol";
import tachyonMeta from "tachyon-protocol/dist/meta.json" assert { type: "json" };
import { ClientOptions, WebSocket } from "ws";

import { getValidators } from "@/validators.js";

let validators: Map<string, ValidateFunction> = new Map();

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

    protected constructor(config: TachyonClientOptions) {
        this.config = config;

        const protocol = config.ssl ? "wss" : "ws";
        this.socket = new WebSocket(
            `${protocol}://${config.host}:${config.port}?tachyonVersion=${tachyonMeta.version}`,
            {
                ...config,
            }
        );

        this.socket.on("open", async () => {
            if (this.config.logging) {
                console.log(
                    chalk.green(
                        `Connected to ${config.host}:${config.port} using Tachyon Version ${tachyonMeta.version}`
                    )
                );
            }
        });

        this.socket.on("message", (message) => {
            const response = JSON.parse(message.toString());
            const signal = this.responseSignals.get(response.command);

            const validator = validators.get(response.command);

            if (!validator) {
                throw new Error(`No response validator found for ${response.command}`);
            }

            const isValid = validator(response);
            if (!isValid) {
                console.error(validator.errors);
                throw new Error(`Response validation failed for ${response.command}`);
            }

            if (signal) {
                signal.dispatch(response);
            }

            if (this.config.logging) {
                console.log("RESPONSE", response);
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
    }

    public static async create(config: TachyonClientOptions) {
        validators = await getValidators();

        return new TachyonClient(config);
    }

    public request<S extends ServiceId, E extends RequestEndpointId<S> & ResponseEndpointId<S>>(
        serviceId: S,
        endpointId: E & string,
        data: RequestData<S, E>
    ): Promise<ResponseType<S, E>> {
        return new Promise((resolve) => {
            const request = {
                command: `${serviceId}/${endpointId}/request`,
                data,
            };

            const validator = validators.get(`${serviceId}/${endpointId}/request`);

            if (!validator) {
                throw new Error(`No request validator found for ${serviceId}/${endpointId}`);
            }

            const isValid = validator(request);
            if (!isValid) {
                console.error(validator.errors);
                throw new Error(`Request validation failed for ${serviceId}/${endpointId}`);
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
