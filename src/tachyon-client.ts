/* eslint-disable @typescript-eslint/no-explicit-any */
import { Static } from "@sinclair/typebox";
import Ajv, { ValidateFunction } from "ajv/dist/2020";
import { objectKeys, Signal, SignalBinding } from "jaz-ts-utils";
import { clearInterval, setInterval } from "timers";
import * as tls from "tls";
import { SetOptional } from "type-fest";
import * as gzip from "zlib";

import { NotConnectedError, ServerClosedError } from "~/model/errors";
import { requestResponseMap } from "~/model/request-response-map";
import { requests } from "~/model/requests";
import { responses } from "~/model/responses";

export interface TachyonClientOptions extends tls.ConnectionOptions {
    host: string;
    port: number;
    verbose: boolean;
    pingIntervalMs: number;
    logMethod: (message?: any, ...optionalParams: any[]) => void;
    attemptReconnect: boolean;
    attemptReconnectIntervalMs: number;
}

export const defaultTachyonClientOptions = {
    verbose: true,
    pingIntervalMs: 30000,
    logMethod: console.log,
    attemptReconnect: true,
    attemptReconnectIntervalMs: 1000,
};

export type RequestKey = keyof typeof requests;
export type ResponseKey = keyof typeof responses;
export type RequestType<K extends RequestKey> = Static<typeof requests[K]>;
export type ResponseType<K extends ResponseKey> = Static<typeof responses[K]>;
export type RequestResponseKey<K extends RequestKey> = K extends keyof typeof requestResponseMap ? typeof requestResponseMap[K] : never;
export type RequestResponseType<K extends RequestKey> = RequestResponseKey<K> extends never ? never : ResponseType<RequestResponseKey<K>>;

export class TachyonClient {
    public config: TachyonClientOptions;
    public socket?: tls.TLSSocket;
    public onConnect = new Signal();
    public onClose = new Signal<void>();

    protected pingIntervalId?: NodeJS.Timeout;
    protected requestSignals: Map<string, Signal<Record<string, unknown>>> = new Map();
    protected responseSignals: Map<string, Signal<Record<string, unknown>>> = new Map();
    protected requestClosedBinding?: SignalBinding;
    protected loggedIn = false;
    protected ajv: Ajv;
    protected requestValidators: { [key in RequestKey]?: ValidateFunction } = {};
    protected responseValidators: { [key in ResponseKey]?: ValidateFunction } = {};
    protected reconnectIntervalId?: NodeJS.Timeout;

    constructor(options: SetOptional<TachyonClientOptions, keyof typeof defaultTachyonClientOptions>) {
        this.config = Object.assign({}, defaultTachyonClientOptions, options);

        if (options.rejectUnauthorized === undefined && this.config.host === "localhost") {
            this.config.rejectUnauthorized = false;
        }

        this.ajv = new Ajv({ allErrors: true });
        this.ajv.addKeyword("kind");
        this.ajv.addKeyword("modifier");

        objectKeys(requests).forEach((key) => {
            const requestSchema = requests[key];
            if (requestSchema.type === "object") {
                requestSchema.additionalProperties = false;
            }
            const validator = this.ajv.compile(requestSchema);
            this.requestValidators[key] = validator;
        });
        objectKeys(responses).forEach((key) => {
            const responseSchema = responses[key];
            if (responseSchema.type === "object") {
                responseSchema.additionalProperties = false;
            }
            const validator = this.ajv.compile(responseSchema);
            this.responseValidators[key] = validator;
        });
    }

    public async connect() {
        return new Promise<void>((resolve, reject) => {
            if (this.socket && this.socket.readable) {
                resolve(); // already connected
                return;
            }

            this.onClose.disposeAll();
            if (this.reconnectIntervalId) {
                clearInterval(this.reconnectIntervalId);
            }

            this.socket = tls.connect(this.config);

            let chunk = "";
            this.socket.on("data", (dataBuffer: Buffer) => {
                try {
                    const data = dataBuffer.toString("utf8");
                    chunk += data;
                    const isChunkComplete = data.endsWith("\n");
                    if (!isChunkComplete) {
                        return;
                    }
                    const gzipped = Buffer.from(chunk, "base64");
                    chunk = "";
                    const response = gzip.unzipSync(gzipped);
                    const jsonString = response.toString("utf8");
                    const command = JSON.parse(jsonString);
                    if (this.config.verbose) {
                        this.config.logMethod("RESPONSE:", command);
                    }

                    const { cmd: responseKey, ...responseData } = command;

                    if (responseKey in responses) {
                        this.validateResponse(responseKey, responseData);
                    } else {
                        console.warn(`No response handler for ${responseKey}`);
                    }

                    const responseSignal = this.responseSignals.get(command.cmd);
                    if (responseSignal) {
                        responseSignal.dispatch(command);
                    }

                    if (command.error || command.result === "error") {
                        reject(command);
                    }
                } catch (err) {
                    console.debug("Tachyon response handling error");
                    throw err;
                }
            });

            this.socket.on("secureConnect", () => {
                if (this.config.verbose) {
                    this.config.logMethod(`connected to ${this.config.host}:${this.config.port}`);
                }
                this.onConnect.dispatch();
                this.startPingInterval();
                resolve();
            });

            this.socket.on("close", () => {
                this.onClose.dispatch();
            });

            this.onClose.add(() => {
                this.loggedIn = false;
                this.stopPingInterval();
                this.socket?.destroy();
                if (this.config.verbose) {
                    this.config.logMethod(`disconnected from ${this.config.host}:${this.config.port}`);
                }

                if (this.config.attemptReconnect) {
                    this.reconnectIntervalId = setInterval(() => {
                        this.connect();
                    }, this.config.attemptReconnectIntervalMs);
                }

                reject(new ServerClosedError());
            });

            this.socket.on("error", (err) => {
                if (this.config.verbose) {
                    console.error("error", err);
                }
                reject(err);
            });

            this.socket.on("timeout", (data) => {
                if (this.config.verbose) {
                    this.config.logMethod("timeout", data);
                }
            });

            this.onResponse("s.auth.login").add((data) => {
                if (data.result === "success") {
                    this.loggedIn = true;
                }
            });

            this.onRequest("c.auth.disconnect").add(() => {
                this.loggedIn = false;
            });
        });
    }

    public async request<K extends RequestKey | (string & { key?: any }), Data extends K extends RequestKey ? RequestType<K> : Record<string, unknown>>(
        requestKey: K,
        data: Data,
        responseKey?: string
    ): Promise<K extends RequestKey ? RequestResponseType<K> : Record<string, unknown>> {
        if (!responseKey) {
            responseKey = requestResponseMap[requestKey as keyof typeof requestResponseMap];
        }

        return new Promise((resolve, reject) => {
            if (!this.socket?.readable) {
                reject(new NotConnectedError());
            }

            if (this.requestClosedBinding) {
                this.requestClosedBinding.destroy();
            }
            this.requestClosedBinding = this.onClose.add(() => {
                if (requestKey === "c.auth.disconnect") {
                    resolve({} as any);
                } else {
                    reject(new ServerClosedError());
                }
            });

            this.validateRequest(requestKey as RequestKey, data);

            if (responseKey && responseKey !== "none") {
                const signalBinding = this.onResponse(responseKey).add((data) => {
                    signalBinding.destroy();

                    resolve(data as any);
                });

                this.rawRequest({ cmd: requestKey, ...data });
            } else {
                this.rawRequest({ cmd: requestKey, ...data });

                resolve({} as any);
            }
        });
    }

    public onRequest<K extends RequestKey>(requestKey: K): Signal<RequestType<K>>;
    public onRequest<K extends string>(requestKey: K): Signal<Record<string, unknown>>;
    public onRequest<K extends RequestKey | string>(requestKey: K): Signal<Record<string, unknown>> {
        let request = this.requestSignals.get(requestKey);
        if (!request) {
            request = new Signal();
            this.requestSignals.set(requestKey, request);
        }

        return request;
    }

    public onResponse<K extends ResponseKey>(responseKey: K): Signal<ResponseType<K>>;
    public onResponse<K extends string>(responseKey: K): Signal<Record<string, unknown>>;
    public onResponse<K extends ResponseKey | string>(responseKey: K): Signal<Record<string, unknown>> {
        let response = this.responseSignals.get(responseKey);
        if (!response) {
            response = new Signal();
            this.responseSignals.set(responseKey, response);
        }

        return response;
    }

    public isLoggedIn() {
        return this.loggedIn;
    }

    public isConnected() {
        return this.socket?.readable;
    }

    protected rawRequest(request: Record<string, unknown>) {
        const jsonString = JSON.stringify(request);
        const gzipped = gzip.gzipSync(jsonString);
        const base64 = Buffer.from(gzipped).toString("base64");

        if (this.config.verbose) {
            this.config.logMethod("REQUEST:", request);
        }

        this.socket?.write(base64 + "\n");
    }

    protected startPingInterval() {
        this.pingIntervalId = setInterval(() => {
            this.request("c.system.ping", {});
        }, this.config.pingIntervalMs);
    }

    protected stopPingInterval() {
        if (this.pingIntervalId) {
            clearInterval(this.pingIntervalId);
        }
    }

    protected validateRequest(key: RequestKey, request: Record<string, unknown>) {
        const validator = this.requestValidators[key];
        if (validator) {
            const isValid = validator(request);
            if (validator.errors) {
                console.warn(`Server response for ${key} did not match expected schema:`, validator.errors);
                return validator.errors;
            }
        }
        return;
    }

    protected validateResponse(key: ResponseKey, response: Record<string, unknown>) {
        const validator = this.responseValidators[key];
        if (validator) {
            const isValid = validator(response);
            if (validator.errors) {
                console.warn(`Server response for ${key} did not match expected schema:`, validator.errors);
                return validator.errors;
            }
        }
        return;
    }
}
