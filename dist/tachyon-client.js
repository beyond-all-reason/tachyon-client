"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TachyonClient = exports.defaultTachyonClientOptions = void 0;
const jaz_ts_utils_1 = require("jaz-ts-utils");
const tls = __importStar(require("tls"));
const gzip = __importStar(require("zlib"));
const errors_1 = require("./model/errors");
exports.defaultTachyonClientOptions = {
    pingIntervalMs: 30000
};
class TachyonClient {
    constructor(options) {
        this.onClose = new jaz_ts_utils_1.Signal();
        this.requestSignals = new Map();
        this.responseSignals = new Map();
        this.loggedIn = false;
        this.connected = false;
        this.config = Object.assign({}, exports.defaultTachyonClientOptions, options);
        if (options.rejectUnauthorized === undefined && this.config.host === "localhost") {
            this.config.rejectUnauthorized = false;
        }
    }
    async connect() {
        return new Promise((resolve, reject) => {
            if (this.socket && this.socket.readable) {
                resolve(); // already connected
                return;
            }
            this.requestSignals = new Map();
            this.responseSignals = new Map();
            this.addCommand("disconnect", "c.auth.disconnect");
            this.addCommand("ping", "c.system.ping", "s.system.pong");
            this.addCommand("register", "c.auth.register", "s.auth.register");
            this.addCommand("getToken", "c.auth.get_token", "s.auth.get_token");
            this.addCommand("login", "c.auth.login", "s.auth.login");
            this.addCommand("verify", "c.auth.verify", "s.auth.verify");
            this.addCommand("getBattles", "c.lobby.query", "s.lobby.query");
            this.socket = tls.connect(this.config);
            this.socket.on("data", (dataBuffer) => {
                const data = dataBuffer.toString("utf8");
                const gzipped = Buffer.from(data, "base64");
                const response = gzip.unzipSync(gzipped);
                const jsonString = response.toString("utf8");
                const command = JSON.parse(jsonString);
                if (this.config.verbose) {
                    console.log("RESPONSE:", command);
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
                    console.log(`connected to ${this.config.host}:${this.config.port}`);
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
                var _a;
                this.loggedIn = false;
                this.stopPingInterval();
                (_a = this.socket) === null || _a === void 0 ? void 0 : _a.destroy();
                if (this.config.verbose) {
                    console.log(`disconnected from ${this.config.host}:${this.config.port}`);
                }
                reject(new errors_1.ServerClosedError());
            });
            this.socket.on("error", (err) => {
                if (this.config.verbose) {
                    console.error("error", err);
                }
                reject(err);
            });
            this.socket.on("timeout", (data) => {
                if (this.config.verbose) {
                    console.log("timeout", data);
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
    onRequest(type) {
        if (!this.requestSignals.has(type)) {
            this.requestSignals.set(type, new jaz_ts_utils_1.Signal());
        }
        return this.requestSignals.get(type);
    }
    onResponse(type) {
        if (!this.responseSignals.has(type)) {
            this.responseSignals.set(type, new jaz_ts_utils_1.Signal());
        }
        return this.responseSignals.get(type);
    }
    isLoggedIn() {
        return this.loggedIn;
    }
    isConnected() {
        return this.connected;
    }
    rawRequest(request) {
        var _a;
        const jsonString = JSON.stringify(request);
        const gzipped = gzip.gzipSync(jsonString);
        const base64 = Buffer.from(gzipped).toString("base64");
        if (this.config.verbose) {
            console.log("REQUEST:", request);
        }
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.write(base64 + "\n");
    }
    addCommand(name, clientCmd, serverCmd) {
        TachyonClient.prototype[name] = function (args) {
            return new Promise((resolve, reject) => {
                var _a;
                if (!((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readable)) {
                    reject(new errors_1.NotConnectedError());
                }
                if (this.requestClosedBinding) {
                    this.requestClosedBinding.destroy();
                }
                this.requestClosedBinding = this.onClose.add(() => {
                    if (clientCmd === "c.auth.disconnect") {
                        resolve();
                    }
                    else {
                        reject(new errors_1.ServerClosedError());
                    }
                });
                if (serverCmd) {
                    const signalBinding = this.onResponse(serverCmd).add((data) => {
                        signalBinding.destroy();
                        resolve(data);
                    });
                    this.rawRequest({ cmd: clientCmd, ...args });
                }
                else {
                    this.rawRequest({ cmd: clientCmd, ...args });
                    resolve();
                }
            });
        };
    }
    startPingInterval() {
        this.pingIntervalId = setInterval(() => {
            this.ping();
        }, this.config.pingIntervalMs);
    }
    stopPingInterval() {
        if (this.pingIntervalId) {
            clearInterval(this.pingIntervalId);
        }
    }
}
exports.TachyonClient = TachyonClient;
//# sourceMappingURL=tachyon-client.js.map