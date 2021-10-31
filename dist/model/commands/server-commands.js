"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverCommandSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
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
        user: typebox_1.Type.Optional(typebox_1.Type.Any()),
        agreement: typebox_1.Type.Optional(typebox_1.Type.String()),
        reason: typebox_1.Type.Optional(typebox_1.Type.String())
    }),
    "s.auth.verify": typebox_1.Type.Object({
        result: typebox_1.Type.String(),
        user: typebox_1.Type.Optional(typebox_1.Type.Any()),
        reason: typebox_1.Type.Optional(typebox_1.Type.String())
    })
};
//# sourceMappingURL=server-commands.js.map