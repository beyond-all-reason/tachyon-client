/// <reference types="node" />
import { Static } from "@sinclair/typebox";
import Ajv, { ValidateFunction } from "ajv";
import { Signal, SignalBinding } from "jaz-ts-utils";
import * as tls from "tls";
import { SetOptional } from "type-fest";
import { requestResponseMap } from "./model/request-response-map";
import { requests } from "./model/requests";
import { responses } from "./model/responses";
export interface TachyonClientOptions extends tls.ConnectionOptions {
    host: string;
    port: number;
    verbose: boolean;
    pingIntervalMs: number;
    logMethod: (message?: any, ...optionalParams: any[]) => void;
}
export declare const defaultTachyonClientOptions: {
    verbose: boolean;
    pingIntervalMs: number;
    logMethod: (message?: any, ...optionalParams: any[]) => void;
};
export declare type RequestKey = keyof typeof requests;
export declare type ResponseKey = keyof typeof responses;
export declare type RequestType<K extends RequestKey> = Static<typeof requests[K]>;
export declare type ResponseType<K extends ResponseKey> = Static<typeof responses[K]>;
export declare type RequestResponseKey<K extends RequestKey> = typeof requestResponseMap[K];
export declare type RequestResponseType<K extends RequestKey> = ResponseType<RequestResponseKey<K>>;
export declare class TachyonClient {
    config: TachyonClientOptions;
    socket?: tls.TLSSocket;
    onClose: Signal<void>;
    protected pingIntervalId?: NodeJS.Timeout;
    protected requestSignals: Map<string, Signal<Record<string, unknown>>>;
    protected responseSignals: Map<string, Signal<Record<string, unknown>>>;
    protected requestClosedBinding?: SignalBinding;
    protected loggedIn: boolean;
    protected connected: boolean;
    protected ajv: Ajv;
    protected requestValidators: {
        [key in RequestKey]?: ValidateFunction;
    };
    protected responseValidators: {
        [key in ResponseKey]?: ValidateFunction;
    };
    constructor(options: SetOptional<TachyonClientOptions, keyof typeof defaultTachyonClientOptions>);
    connect(): Promise<void>;
    request<K extends RequestKey | (string & {
        key?: any;
    }), Data extends (K extends RequestKey ? RequestType<K> : Record<string, unknown>)>(requestKey: K, data: Data, responseKey?: string): Promise<K extends RequestKey ? RequestResponseType<K> : Record<string, unknown>>;
    onRequest<K extends RequestKey>(requestKey: K): Signal<RequestType<K>>;
    onRequest<K extends string>(requestKey: K): Signal<Record<string, unknown>>;
    onResponse<K extends ResponseKey>(responseKey: K): Signal<ResponseType<K>>;
    onResponse<K extends string>(responseKey: K): Signal<Record<string, unknown>>;
    isLoggedIn(): boolean;
    isConnected(): boolean;
    protected rawRequest(request: Record<string, unknown>): void;
    protected startPingInterval(): void;
    protected stopPingInterval(): void;
    protected validateRequest(key: RequestKey, request: Record<string, unknown>): import("ajv").ErrorObject<string, Record<string, any>, unknown>[] | undefined;
    protected validateResponse(key: ResponseKey, response: Record<string, unknown>): import("ajv").ErrorObject<string, Record<string, any>, unknown>[] | undefined;
}
