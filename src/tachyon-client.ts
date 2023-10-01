import { Signal } from "jaz-ts-utils";
import { WebSocket } from "ws";

// eslint-disable-next-line no-restricted-imports
import type {
    RequestData,
    RequestEndpointId,
    RequestType,
    ResponseEndpointId,
    ResponseType,
    ServiceId,
} from "../tachyon/dist/index.d.ts";

export class TachyonClient {
    protected socket: WebSocket;
    protected responseSignals: Map<string, Signal> = new Map();

    constructor(...args: ConstructorParameters<typeof WebSocket>) {
        this.socket = new WebSocket(...args);

        this.socket.on("message", (message) => {
            const response = JSON.parse(message.toString());
            const signal = this.responseSignals.get(response.command);
            if (signal) {
                signal.dispatch(response);
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
