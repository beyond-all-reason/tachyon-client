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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TachyonClient = exports.defaultTachyonClientOptions = void 0;
const ajv_1 = __importDefault(require("ajv"));
const jaz_ts_utils_1 = require("jaz-ts-utils");
const tls = __importStar(require("tls"));
const gzip = __importStar(require("zlib"));
const errors_1 = require("./model/errors");
const request_response_map_1 = require("./model/request-response-map");
const responses_1 = require("./model/responses");
exports.defaultTachyonClientOptions = {
    verbose: true,
    pingIntervalMs: 30000,
    logMethod: console.log,
};
class TachyonClient {
    constructor(options) {
        this.onClose = new jaz_ts_utils_1.Signal();
        this.requestSignals = new Map();
        this.responseSignals = new Map();
        this.loggedIn = false;
        this.connected = false;
        this.responseValidators = {};
        this.config = Object.assign({}, exports.defaultTachyonClientOptions, options);
        if (options.rejectUnauthorized === undefined && this.config.host === "localhost") {
            this.config.rejectUnauthorized = false;
        }
        this.ajv = new ajv_1.default();
        this.ajv.addKeyword('kind');
        this.ajv.addKeyword('modifier');
        (0, jaz_ts_utils_1.objectKeys)(responses_1.responses).forEach((key) => {
            const responseSchema = responses_1.responses[key];
            const validator = this.ajv.compile(responseSchema);
            this.responseValidators[key] = validator;
        });
    }
    async connect() {
        return new Promise((resolve, reject) => {
            if (this.socket && this.socket.readable) {
                resolve(); // already connected
                return;
            }
            this.requestSignals = new Map();
            this.responseSignals = new Map();
            this.socket = tls.connect(this.config);
            this.socket.on("data", (dataBuffer) => {
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
                var _a;
                this.loggedIn = false;
                this.stopPingInterval();
                (_a = this.socket) === null || _a === void 0 ? void 0 : _a.destroy();
                if (this.config.verbose) {
                    this.config.logMethod(`disconnected from ${this.config.host}:${this.config.port}`);
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
    async request(requestKey, data, responseKey) {
        if (!responseKey) {
            responseKey = request_response_map_1.requestResponseMap[requestKey];
        }
        return new Promise((resolve, reject) => {
            var _a;
            if (!((_a = this.socket) === null || _a === void 0 ? void 0 : _a.readable)) {
                reject(new errors_1.NotConnectedError());
            }
            if (this.requestClosedBinding) {
                this.requestClosedBinding.destroy();
            }
            this.requestClosedBinding = this.onClose.add(() => {
                if (requestKey === "c.auth.disconnect") {
                    resolve({});
                }
                else {
                    reject(new errors_1.ServerClosedError());
                }
            });
            if (responseKey && responseKey !== "none") {
                const signalBinding = this.onResponse(responseKey).add((data) => {
                    signalBinding.destroy();
                    if (responseKey && responseKey in responses_1.responses) {
                        this.validateResponse(responseKey, data);
                    }
                    resolve(data);
                });
                this.rawRequest({ cmd: requestKey, ...data });
            }
            else {
                this.rawRequest({ cmd: requestKey, ...data });
                resolve({});
            }
        });
    }
    onRequest(requestKey) {
        let request = this.requestSignals.get(requestKey);
        if (!request) {
            request = new jaz_ts_utils_1.Signal();
            this.requestSignals.set(requestKey, request);
        }
        return request;
    }
    onResponse(responseKey) {
        let response = this.responseSignals.get(responseKey);
        if (!response) {
            response = new jaz_ts_utils_1.Signal();
            this.responseSignals.set(responseKey, response);
        }
        return response;
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
            this.config.logMethod("REQUEST:", request);
        }
        (_a = this.socket) === null || _a === void 0 ? void 0 : _a.write(base64 + "\n");
    }
    startPingInterval() {
        this.pingIntervalId = setInterval(() => {
            this.request("c.system.ping", {});
        }, this.config.pingIntervalMs);
    }
    stopPingInterval() {
        if (this.pingIntervalId) {
            clearInterval(this.pingIntervalId);
        }
    }
    validateResponse(key, response) {
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
exports.TachyonClient = TachyonClient;
//# sourceMappingURL=tachyon-client.js.map