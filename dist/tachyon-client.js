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
exports.defaultTachyonClientOptions = {};
class TachyonClient {
    constructor(options) {
        this.tachyonModeEnabled = false;
        this.onCommand = new jaz_ts_utils_1.Signal();
        this.config = Object.assign({}, exports.defaultTachyonClientOptions, options);
        this.addClientCommand("ping", "c.system.ping", "s.system.pong");
        this.addClientCommand("register", "c.auth.register", "s.auth.register");
        this.addClientCommand("getToken", "c.auth.get_token", "s.auth.get_token");
        this.addClientCommand("verify", "c.auth.verify", "s.auth.verify");
        this.addClientCommand("disconnect", "c.auth.disconnect");
        this.socket = tls.connect(this.config);
        this.socket.on("data", (dataBuffer) => {
            if (!this.tachyonModeEnabled) {
                return;
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
                console.log("Connected!");
            }
        });
        this.socket.on("close", () => {
            if (this.config.verbose) {
                console.log("close");
            }
        });
        this.socket.on("error", (err) => {
            if (this.config.verbose) {
                console.log("error", err);
            }
        });
        this.socket.on("timeout", () => {
            if (this.config.verbose) {
                console.log("timeout");
            }
        });
        this.socket.on("end", () => {
            if (this.config.verbose) {
                console.log("end");
            }
        });
    }
    async connect() {
        return new Promise(resolve => {
            const onData = (dataBuffer) => {
                const dataParts = dataBuffer.toString("utf8").split("\n");
                for (const dataPart of dataParts) {
                    if (dataPart.slice(0, 2) === "OK") {
                        this.tachyonModeEnabled = true;
                        this.socket.off("data", onData);
                        resolve();
                        return;
                    }
                }
            };
            this.socket.on("data", onData);
            this.socket.write("TACHYON" + "\n", "utf8");
        });
    }
    rawRequest(request) {
        const jsonString = JSON.stringify(request);
        const gzipped = gzip.gzipSync(jsonString);
        const base64 = Buffer.from(gzipped).toString("base64");
        if (this.config.verbose) {
            console.log("REQUEST:", request);
        }
        this.socket.write(base64 + "\n");
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