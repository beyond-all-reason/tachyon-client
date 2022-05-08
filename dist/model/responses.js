"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responses = void 0;
const typebox_1 = require("@sinclair/typebox");
const userSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    springid: typebox_1.Type.Union([typebox_1.Type.Number(), typebox_1.Type.String()]),
    name: typebox_1.Type.String(),
    bot: typebox_1.Type.Boolean(),
    clan_id: typebox_1.Type.Union([typebox_1.Type.Number(), typebox_1.Type.Null()]),
    friend_requests: typebox_1.Type.Array(typebox_1.Type.Number()),
    friends: typebox_1.Type.Array(typebox_1.Type.Number())
});
const botSchema = typebox_1.Type.Object({
    ai_dll: typebox_1.Type.String(),
    ally_team_number: typebox_1.Type.Number(),
    handicap: typebox_1.Type.Number(),
    name: typebox_1.Type.String(),
    owner_id: typebox_1.Type.Number(),
    owner_name: typebox_1.Type.String(),
    player: typebox_1.Type.Boolean(),
    ready: typebox_1.Type.Boolean(),
    side: typebox_1.Type.Number(),
    sync: typebox_1.Type.Number(),
    team_colour: typebox_1.Type.String(),
    team_number: typebox_1.Type.Number(),
});
exports.responses = {
    "s.system.pong": typebox_1.Type.Object({}),
    "s.auth.register": typebox_1.Type.Object({
        result: typebox_1.Type.String(),
        reason: typebox_1.Type.Optional(typebox_1.Type.String()),
    }),
    "s.auth.get_token": typebox_1.Type.Object({
        result: typebox_1.Type.String(),
        token: typebox_1.Type.Optional(typebox_1.Type.String()),
        reason: typebox_1.Type.Optional(typebox_1.Type.String())
    }),
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
    "s.lobby.query": typebox_1.Type.Object({
        lobbies: typebox_1.Type.Array(typebox_1.Type.Object({
            bots: typebox_1.Type.Record(typebox_1.Type.String(), botSchema),
            disabled_units: typebox_1.Type.Array(typebox_1.Type.String()),
            engine_name: typebox_1.Type.String(),
            engine_version: typebox_1.Type.String(),
            founder_id: typebox_1.Type.Number(),
            id: typebox_1.Type.Number(),
            ip: typebox_1.Type.String(),
            locked: typebox_1.Type.Boolean(),
            map_hash: typebox_1.Type.String(),
            map_name: typebox_1.Type.String(),
            max_players: typebox_1.Type.Number(),
            name: typebox_1.Type.String(),
            password: typebox_1.Type.Union([typebox_1.Type.String(), typebox_1.Type.Null()]),
            players: typebox_1.Type.Array(typebox_1.Type.Number()),
            tags: typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.String()),
            type: typebox_1.Type.String(),
        }))
    })
};
//# sourceMappingURL=responses.js.map