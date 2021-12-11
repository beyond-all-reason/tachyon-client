"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientCommandSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.clientCommandSchema = {
    "c.system.ping": typebox_1.Type.Void(),
    "c.auth.register": typebox_1.Type.Object({
        username: typebox_1.Type.String(),
        email: typebox_1.Type.String(),
        password: typebox_1.Type.String(),
    }),
    "c.auth.get_token": typebox_1.Type.Object({
        email: typebox_1.Type.String(),
        password: typebox_1.Type.String(),
    }),
    "c.auth.login": typebox_1.Type.Object({
        token: typebox_1.Type.String(),
        lobby_name: typebox_1.Type.String(),
        lobby_version: typebox_1.Type.String(),
        lobby_hash: typebox_1.Type.String(),
    }),
    "c.auth.verify": typebox_1.Type.Object({
        token: typebox_1.Type.String(),
        code: typebox_1.Type.String(),
    }),
    "c.auth.disconnect": typebox_1.Type.Void(),
    "c.lobby.query": typebox_1.Type.Union([typebox_1.Type.Object({
        // id: Type.Optional(Type.Integer()),
        // locked: Type.Optional(Type.Boolean()),
        // started: Type.Optional(Type.Boolean()),
        // player_count: Type.Optional(Type.Integer()),
        // spectator_count: Type.Optional(Type.Integer()),
        // user_count: Type.Optional(Type.Integer()),
        // player_list: Type.Optional(Type.Integer()),
        // spectator_list: Type.Optional(Type.Integer()),
        // user_list: Type.Optional(Type.Integer())
        }), typebox_1.Type.Void()])
};
//# sourceMappingURL=client-commands.js.map