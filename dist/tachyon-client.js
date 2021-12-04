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
exports.defaultTachyonClientOptions = {
    pingIntervalMs: 30000
};
class TachyonClient {
    constructor(options) {
        this.tachyonModeEnabled = false;
        this.onCommand = new jaz_ts_utils_1.Signal();
        this.config = Object.assign({}, exports.defaultTachyonClientOptions, options);
        if (options.rejectUnauthorized === undefined && this.config.host === "localhost") {
            this.config.rejectUnauthorized = false;
        }
        this.addClientCommand("disconnect", "c.auth.disconnect");
        this.addClientCommand("ping", "c.system.ping", "s.system.pong");
        this.addClientCommand("register", "c.auth.register", "s.auth.register");
        this.addClientCommand("getToken", "c.auth.get_token", "s.auth.get_token");
        this.addClientCommand("login", "c.auth.login", "s.auth.login");
        this.addClientCommand("verify", "c.auth.verify", "s.auth.verify");
    }
    async connect() {
        return new Promise(resolve => {
            this.socket = tls.connect(this.config);
            this.socket.on("data", (dataBuffer) => {
                if (!this.tachyonModeEnabled) {
                    const dataParts = dataBuffer.toString("utf8").split("\n");
                    for (const dataPart of dataParts) {
                        if (dataPart.slice(0, 2) === "OK") {
                            this.tachyonModeEnabled = true;
                            this.pingIntervalId = setInterval(() => {
                                this.ping();
                            }, this.config.pingIntervalMs);
                            if (this.config.verbose) {
                                console.log("tachyonModeEnabled");
                            }
                            resolve();
                            return;
                        }
                    }
                }
                const data = dataBuffer.toString("utf8");
                const gzipped = Buffer.from(data, "base64");
                const response = gzip.unzipSync(gzipped);
                const jsonString = response.toString("utf8");
                const command = JSON.parse(jsonString);
                if (this.config.verbose) {
                    console.log("RESPONSE:", command);
                }
                this.onCommand.dispatch(command);
            });
            this.socket.on("secureConnect", () => {
                if (this.config.verbose) {
                    console.log("secureConnect");
                }
            });
            this.socket.on("close", (data) => {
                if (this.config.verbose) {
                    console.log("close", data);
                }
            });
            this.socket.on("error", (err) => {
                if (this.config.verbose) {
                    console.log("error", err);
                }
            });
            this.socket.on("timeout", (data) => {
                if (this.config.verbose) {
                    console.log("timeout", data);
                }
            });
            this.socket.on("end", (data) => {
                if (this.config.verbose) {
                    console.log("end", data);
                }
            });
            this.socket.write("TACHYON" + "\n", "utf8");
        });
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
    addClientCommand(name, clientCmd, serverCmd) {
        TachyonClient.prototype[name] = function (args) {
            return new Promise(resolve => {
                if (serverCmd) {
                    const onCommand = this.onCommand.add((command) => {
                        if (command.cmd === serverCmd) {
                            onCommand.destroy();
                            resolve(command);
                        }
                    });
                    this.rawRequest({
                        cmd: clientCmd,
                        ...args
                    });
                }
                else {
                    this.rawRequest({
                        cmd: clientCmd,
                        ...args
                    });
                    resolve();
                }
            });
        };
    }
}
exports.TachyonClient = TachyonClient;
//# sourceMappingURL=tachyon-client.js.map