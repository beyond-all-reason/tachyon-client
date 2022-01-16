"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotConnectedError = exports.ServerClosedError = void 0;
class ServerClosedError extends Error {
    constructor() { super("server unexpectedly closed the connection"); }
}
exports.ServerClosedError = ServerClosedError;
class NotConnectedError extends Error {
    constructor() { super("not connected to server"); }
}
exports.NotConnectedError = NotConnectedError;
//# sourceMappingURL=errors.js.map