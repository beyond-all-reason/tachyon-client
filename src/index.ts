import axios from "axios";
import { rpc, RPCImpl } from "protobufjs";
import { WebSocket } from "ws";

import { tachyon } from "./api";

type FilteredObject<T> = Pick<
    T,
    {
        [P in keyof T]: T[P] extends never ? never : P;
    }[keyof T]
>;

type Services = FilteredObject<{
    [K in keyof typeof tachyon]: typeof tachyon[K] extends typeof rpc.Service ? InstanceType<typeof tachyon[K]> : never;
}>;

export type TachyonClientConfig = {
    authUrl: string;
    wsUrl: string;
    email: string;
    password: string;
};

export async function createTachyonClient(config: TachyonClientConfig) {
    return TachyonClient.create(config);
}

export class TachyonClient {
    public static async create(config: TachyonClientConfig) {
        const { data } = await axios(`${config.authUrl}/request_token`, {
            method: "post",
            data: {
                email: config.email,
                password: config.password,
            },
            responseType: "json",
        });

        if (data?.result !== "success") {
            throw new Error(data);
        }

        const token = encodeURIComponent(data.token_value);

        const client = new TachyonClient({
            ...config,
            token,
        });

        await client.ready();

        return client;
    }

    public services: Services;

    protected config: TachyonClientConfig;
    protected socket: WebSocket;

    private constructor(config: TachyonClientConfig & { token: string }) {
        this.config = config;

        this.socket = new WebSocket(`${config.wsUrl}?token=${config.token}`);
        this.socket.binaryType = "arraybuffer";

        const rpcImpl: RPCImpl = (method, requestData, callback) => {
            this.socket.send(requestData);
        };

        // @ts-ignore
        this.services = tachyon;

        this.services = {} as typeof this.services;
        for (const def of Object.values(tachyon)) {
            if (typeof def === "function" && def.prototype instanceof rpc.Service) {
                // @ts-ignore
                this.services[def.name] = def.create(rpcImpl, false, false);
            }
        }

        this.socket.addEventListener("message", (res) => {
            if (res) {
                if (res.data) {
                    const decoded = tachyon.ServerMessage.decode(new Uint8Array(res.data as ArrayBuffer));
                    console.log(decoded);
                }
            }
        });

        this.socket.addEventListener("error", (err) => {
            console.error(err);
        });

        this.socket.addEventListener("close", () => {
            console.log("closed");
        });
    }

    public ready() {
        return new Promise<void>((resolve) => {
            if (this.socket.readyState === WebSocket.OPEN) {
                resolve();
            } else {
                this.socket.on("open", () => {
                    resolve();
                });
            }
        });
    }
}
