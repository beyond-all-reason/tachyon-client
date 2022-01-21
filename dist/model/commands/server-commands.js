"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverCommandSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const userSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    springid: typebox_1.Type.String(),
    name: typebox_1.Type.String(),
    bot: typebox_1.Type.Boolean(),
    clan_id: typebox_1.Type.Union([typebox_1.Type.Number(), typebox_1.Type.Null()]),
    friend_requests: typebox_1.Type.Any(),
    friends: typebox_1.Type.Any()
});
exports.serverCommandSchema = {
    "s.system.pong": typebox_1.Type.Void(),
    "s.auth.register": typebox_1.Type.Object({
        result: typebox_1.Type.String(),
        reason: typebox_1.Type.Optional(typebox_1.Type.String()),
    }),
    "s.auth.get_token": typebox_1.Type.Union([
        typebox_1.Type.Object({
            result: typebox_1.Type.String(),
            token: typebox_1.Type.Optional(typebox_1.Type.String()),
            reason: typebox_1.Type.Optional(typebox_1.Type.String())
        })
    ]),
    "s.auth.login": typebox_1.Type.Object({
        result: typebox_1.Type.String(),
        agreement: typebox_1.Type.Optional(typebox_1.Type.String()),
        reason: typebox_1.Type.Optional(typebox_1.Type.String()),
        user: typebox_1.Type.Optional(userSchema),
    }),
    "s.auth.verify": typebox_1.Type.Object({
        result: typebox_1.Type.String(),
        user: typebox_1.Type.Optional(userSchema),
        reason: typebox_1.Type.Optional(typebox_1.Type.String())
    }),
    "s.lobby.query": typebox_1.Type.Object({})
};
//# sourceMappingURL=server-commands.js.map