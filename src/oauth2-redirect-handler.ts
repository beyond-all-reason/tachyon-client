// Helper for handling OAuth2 redirects from the native application.

import http from "node:http";
import { AddressInfo } from "node:net";

// This is a very simple HTTP server that listens on a random port on localhost
// and returns the URL that it is listening on. It also handles a request to
// specific path and returns the URL that was requested.
export class RedirectHandler {
    private path: string;
    private server: http.Server;
    private error?: Error;
    private callbackUrl?: string;

    constructor(signal?: AbortSignal, path = "/cb") {
        this.path = path;

        this.server = http.createServer((req, res) => this.handleRequest(req, res));

        // We don't just set the signal on the server, because we want to be
        // able to force close all the connections when we are done.
        signal?.addEventListener("abort", () => this.close());

        this.server.on("error", (err) => {
            this.error = err;
            this.close();
        });

        this.server.listen({
            port: 3006,
            host: "127.0.0.1", // We assume that IPv4 is always available
        });
    }

    public close() {
        this.server.close();
        this.server.closeAllConnections();
    }

    public async getRedirectUrl(): Promise<string> {
        if (this.error) {
            throw this.error;
        }
        if (!this.server.listening) {
            await new Promise<void>((resolve, reject) => {
                this.server.once("listening", resolve);
                this.server.once("error", reject);
                this.server.once("close", () => reject(new Error("Server closed before listening")));
            });
        }
        const address = this.server.address() as AddressInfo;
        return `http://${address.address}:${address.port}${this.path}`;
    }

    private handleRequest(req: http.IncomingMessage, res: http.ServerResponse) {
        const url = new URL(req.url!, `http://${req.headers.host}`);
        if (url.pathname !== this.path) {
            res.writeHead(404);
            res.end();
            return;
        }
        this.callbackUrl = url.toString();
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("You can close this window now.");
    }

    public async waitForCallback(): Promise<string> {
        if (this.error) {
            throw this.error;
        }
        if (!this.server.listening) {
            throw new Error("Server is not listening, how did you get redirect url?");
        }
        if (!this.callbackUrl) {
            await new Promise<void>((resolve, reject) => {
                const handler = (req: http.IncomingMessage, res: http.ServerResponse) => {
                    // The callbackUrl is set in the handleRequest method and
                    // we depend on the event listeners order to check it here.
                    if (this.callbackUrl) {
                        this.server.removeListener("request", handler);
                        resolve();
                    }
                };
                this.server.on("request", handler);
                this.server.once("error", reject);
                this.server.once("close", () => reject(new Error("Server closed before callback")));
            });
        }
        return this.callbackUrl!;
    }
}
