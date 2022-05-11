"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestResponseMap = void 0;
function shape(value) {
    return value;
}
exports.requestResponseMap = shape({
    "c.auth.disconnect": "s.auth.disconnect",
    "c.system.ping": "s.system.pong",
    "c.auth.register": "s.auth.register",
    "c.auth.get_token": "s.auth.get_token",
    "c.auth.login": "s.auth.login",
    "c.auth.verify": "s.auth.verify",
    "c.lobby.query": "s.lobby.query",
    "c.user.list_users_from_ids": "s.user.user_and_client_list"
});
//# sourceMappingURL=request-response-map.js.map