import { Static, TObject } from "@sinclair/typebox";
import Ajv, { ValidateFunction } from "ajv";
import { Signal, SignalBinding, objectKeys } from "jaz-ts-utils";
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
}

export const defaultTachyonClientOptions = {
    verbose: true,
    pingIntervalMs: 30000,
    logMethod: console.log,
};

export type RequestKey = keyof typeof requests;
export type ResponseKey = keyof typeof responses;
export type RequestType<K extends RequestKey> = Static<typeof requests[K]>;
export type ResponseType<K extends ResponseKey> = Static<typeof responses[K]>;
export type RequestResponseKey<K extends RequestKey> = K extends keyof typeof requestResponseMap ? typeof requestResponseMap[K] : never;
export type RequestResponseType<K extends RequestKey> = ResponseType<RequestResponseKey<K>>;

export class TachyonClient {
    public config: TachyonClientOptions;
    public socket?: tls.TLSSocket;
    public onClose = new Signal<void>();

    protected pingIntervalId?: NodeJS.Timeout;
    protected requestSignals: Map<string, Signal<Record<string, unknown>>> = new Map();
    protected responseSignals: Map<string, Signal<Record<string, unknown>>> = new Map();
    protected requestClosedBinding?: SignalBinding;
    protected loggedIn = false;
    protected connected = false;
    protected ajv: Ajv;
    protected responseValidators: Record<string, ValidateFunction> = {};

    constructor(options: SetOptional<TachyonClientOptions, keyof typeof defaultTachyonClientOptions>) {
        this.config = Object.assign({}, defaultTachyonClientOptions, options);

        if (options.rejectUnauthorized === undefined && this.config.host === "localhost") {
            this.config.rejectUnauthorized = false;
        }

        this.ajv = new Ajv();
        this.ajv.addKeyword('kind');
        this.ajv.addKeyword('modifier');
        objectKeys(responses).forEach((key) => {
            const responseSchema = responses[key];
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

            this.requestSignals = new Map();
            this.responseSignals = new Map();

            this.socket = tls.connect(this.config);

            this.socket.on("data", (dataBuffer: Buffer) => {
                const data = dataBuffer.toString("utf8");
                const gzipped = Buffer.from(data, "base64");
                const response = gzip.unzipSync(gzipped);
                const jsonString = response.toString("utf8");
                const command = JSON.parse(jsonString);
                if (this.config.verbose) {
                    this.config.logMethod("RESPONSE:", command);
                }

                const responseSignal = this.responseSignals.get(command.cmd);
                if (responseSignal) {
                    responseSignal.dispatch(command);
                }

                if (command.error || command.result === "error") {
                    reject(command);
                }
            });

            this.socket.on("secureConnect", () => {
                if (this.config.verbose) {
                    this.config.logMethod(`connected to ${this.config.host}:${this.config.port}`);
                }
                this.connected = true;
                this.startPingInterval();
                resolve();
            });
            
            this.onClose.disposeAll();

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

    // TODO: figure out how to type overloads to allow unknown command requests without ruining the typing of known command requests
    //public async request<K extends RequestKey, Data extends RequestType<K>, Response extends RequestResponseType<K>>(requestKey: K, data: Data, responseKey?: string) : Promise<Response>;
    //public async request<K extends string, Data extends Record<string, unknown>, Response extends Record<string, unknown>>(requestKey: K, data: Data, responseKey?: string) : Promise<Response>;
    //public async request<K extends RequestKey | string, Data extends (K extends RequestKey ? RequestType<K> : Record<string, unknown>), Response extends (K extends RequestKey ? RequestResponseType<K> : Record<string, unknown>)>(requestKey: K, data: Data, responseKey?: string) : Promise<Response> {
    public async request<K extends RequestKey, Data extends RequestType<K>, Response extends RequestResponseType<K>>(requestKey: K, data: Data, responseKey?: string) : Promise<Response> {
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
                    resolve({} as Response);
                } else {
                    reject(new ServerClosedError());
                }
            });

            if (responseKey && responseKey !== "none") {
                const signalBinding = this.onResponse(responseKey).add((data) => {
                    signalBinding.destroy();

                    if (responseKey && responseKey in responses) {
                        this.validateResponse(responseKey, data);
                    }

                    resolve(data as Response);
                });

                this.rawRequest({ cmd: requestKey, ...data });
            } else {
                this.rawRequest({ cmd: requestKey, ...data });

                resolve({} as Response);
            }
        });
    }

    // @ts-ignore-error Type instantiation is excessively deep and possibly infinite
    public onRequest<K extends RequestKey>(requestKey: K) : Signal<RequestType<K>>;
    public onRequest<K extends string>(requestKey: K) : Signal<Record<string, unknown>>;
    public onRequest<K extends RequestKey | string>(requestKey: K) : Signal<Record<string, unknown>> {
        let request = this.requestSignals.get(requestKey);
        if (!request) {
            request = new Signal();
            this.requestSignals.set(requestKey, request);
        }
        
        return request;
    }

    // @ts-ignore-error Type instantiation is excessively deep and possibly infinite
    public onResponse<K extends ResponseKey>(responseKey: K) : Signal<ResponseType<K>>;
    public onResponse<K extends string>(responseKey: K) : Signal<Record<string, unknown>>;
    public onResponse<K extends ResponseKey | string>(responseKey: K) : Signal<Record<string, unknown>> {
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
        return this.connected;
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

    protected validateResponse(key: string, response: Record<string, unknown>) {
        const validator = this.responseValidators[key];
        if (validator) {
            const isValid = validator(response);
            if (validator.errors) {
                console.warn(`Server response did not match expected schema, this should be updated in tachyon-client:`);
                for (const error of validator.errors) {
                    console.warn(error);
                }
                return validator.errors;
            }
        }
        return null;
    }
}