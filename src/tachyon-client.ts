import chalk from "chalk";
import fs from "fs";
import { Signal } from "jaz-ts-utils";
// eslint-disable-next-line no-restricted-imports
import type {
    RequestData,
    RequestEndpointId,
    RequestType,
    ResponseEndpointId,
    ResponseType,
    ServiceId,
} from "tachyon-protocol";
import { ClientOptions, WebSocket } from "ws";

const tachyonPackageStr = fs.readFileSync("./node_modules/tachyon-protocol/package.json", { encoding: "utf-8" });
const tachyonPackageJson = JSON.parse(tachyonPackageStr);
const tachyonVersion = tachyonPackageJson.version;

export interface TachyonClientOptions extends ClientOptions {
    logging?: boolean;
}

export class TachyonClient {
    protected socket: WebSocket;
    protected responseSignals: Map<string, Signal> = new Map();
    protected config: TachyonClientOptions;

    constructor(address: string | URL, wsOptions?: TachyonClientOptions) {
        this.config = wsOptions ?? { logging: false };

        this.socket = new WebSocket(`${address}?tachyonVersion=${tachyonVersion}`, {
            ...wsOptions,
        });

        this.socket.on("open", () => {
            if (this.config.logging) {
                console.log(chalk.green(`Connected to ${address} using Tachyon Version ${tachyonVersion}`));
            }
        });

        this.socket.on("message", (message) => {
            const response = JSON.parse(message.toString());
            const signal = this.responseSignals.get(response.command);
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
                        `Tachyon protocol version mismatch. Server is serving ${command.data.tachyonVersion} but client is using ${tachyonVersion}. Mismatch type: ${command.data.versionParity}`
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
            const request = {
                command: `${serviceId}/${endpointId}/request`,
                data,
            } as RequestType<S, E>;

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
