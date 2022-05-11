"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requests = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.requests = {
    "c.auth.disconnect": typebox_1.Type.Object({}),
    "c.system.ping": typebox_1.Type.Object({}),
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
    "c.lobby.query": typebox_1.Type.Object({
        query: typebox_1.Type.Object({
            locked: typebox_1.Type.Optional(typebox_1.Type.Boolean()),
            in_progress: typebox_1.Type.Optional(typebox_1.Type.Boolean()),
        }),
    }),
    "c.user.list_users_from_ids": typebox_1.Type.Object({
        id_list: typebox_1.Type.Array(typebox_1.Type.Number()),
        include_clients: typebox_1.Type.Literal(true), // forcing this to ensure the response cmd is always "s.user.user_and_client_list"
    })
};
//# sourceMappingURL=requests.js.map