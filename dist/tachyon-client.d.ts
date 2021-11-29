/// <reference types="node" />
import { Static } from "@sinclair/typebox";
import { Signal } from "jaz-ts-utils";
import * as tls from "tls";
import { clientCommandSchema } from "./model/commands/client-commands";
import { serverCommandSchema } from "./model/commands/server-commands";
export interface TachyonClientOptions extends tls.ConnectionOptions {
    host: string;
    port: number;
    verbose?: boolean;
}
export declare const defaultTachyonClientOptions: Partial<TachyonClientOptions>;
export declare type ClientCommandType<T> = T extends keyof typeof clientCommandSchema ? Static<typeof clientCommandSchema[T]> : void;
export declare type ServerCommandType<T> = T extends keyof typeof serverCommandSchema ? Static<typeof serverCommandSchema[T]> : void;
export interface TachyonClient {
    [key: string]: unknown;
    ping(): Promise<ServerCommandType<"s.system.pong">>;
    register(options: ClientCommandType<"c.auth.register">): Promise<ServerCommandType<"s.auth.register">>;
    getToken(options: ClientCommandType<"c.auth.get_token">): Promise<ServerCommandType<"s.auth.get_token">>;
    login(options: ClientCommandType<"c.auth.login">): Promise<ServerCommandType<"s.auth.login">>;
    verify(options: ClientCommandType<"c.auth.verify">): Promise<ServerCommandType<"s.auth.verify">>;
    disconnect(options: ClientCommandType<"c.auth.disconnect">): Promise<void>;
}
export declare class TachyonClient {
    config: TachyonClientOptions;
    socket: tls.TLSSocket;
    tachyonModeEnabled: boolean;
    onCommand: Signal<{
        [key: string]: unknown;
        cmd: string;
    }>;
    constructor(options: TachyonClientOptions);
    connect(): Promise<void>;
    rawRequest(request: Record<string, unknown>): void;
    protected addClientCommand<C extends keyof typeof clientCommandSchema, S extends keyof typeof serverCommandSchema, Args = Static<typeof clientCommandSchema[C]> extends Record<string, never> ? undefined : Static<typeof clientCommandSchema[C]>>(name: string, clientCmd: C, serverCmd?: S): void;
}
