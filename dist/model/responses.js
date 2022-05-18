"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responses = exports.lobbySchema = exports.botSchema = exports.playerSchema = exports.clientSchema = exports.myUserSchema = exports.userSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.userSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    springid: typebox_1.Type.Union([typebox_1.Type.Number(), typebox_1.Type.String()]),
    name: typebox_1.Type.String(),
    bot: typebox_1.Type.Boolean(),
    clan_id: typebox_1.Type.Union([typebox_1.Type.Number(), typebox_1.Type.Null()]),
    country: typebox_1.Type.String(),
    icons: typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.Any())
});
exports.myUserSchema = typebox_1.Type.Intersect([
    exports.userSchema,
    typebox_1.Type.Object({
        friend_requests: typebox_1.Type.Array(typebox_1.Type.Number()),
        friends: typebox_1.Type.Array(typebox_1.Type.Number()),
        permissions: typebox_1.Type.Array(typebox_1.Type.String())
    })
], { unevaluatedProperties: false });
exports.clientSchema = typebox_1.Type.Object({
    ready: typebox_1.Type.Boolean(),
    player: typebox_1.Type.Boolean(),
    team_number: typebox_1.Type.Number(),
    player_number: typebox_1.Type.Number(),
    team_colour: typebox_1.Type.String(),
    sync: typebox_1.Type.Number(),
});
exports.playerSchema = typebox_1.Type.Intersect([
    exports.clientSchema,
    typebox_1.Type.Object({
        userid: typebox_1.Type.Number(),
        lobby_id: typebox_1.Type.Number(),
        away: typebox_1.Type.Boolean(),
        in_game: typebox_1.Type.Boolean(),
    })
], { unevaluatedProperties: false });
exports.botSchema = typebox_1.Type.Intersect([
    exports.clientSchema,
    typebox_1.Type.Object({
        owner_id: typebox_1.Type.Number(),
        owner_name: typebox_1.Type.String(),
        ai_dll: typebox_1.Type.String(),
        handicap: typebox_1.Type.Number(),
        side: typebox_1.Type.Number(),
        name: typebox_1.Type.String()
    })
], { unevaluatedProperties: false });
exports.lobbySchema = typebox_1.Type.Object({
    bots: typebox_1.Type.Record(typebox_1.Type.String(), exports.botSchema),
    disabled_units: typebox_1.Type.Array(typebox_1.Type.String()),
    engine_name: typebox_1.Type.String(),
    engine_version: typebox_1.Type.String(),
    founder_id: typebox_1.Type.Number(),
    id: typebox_1.Type.Number(),
    in_progress: typebox_1.Type.Boolean(),
    ip: typebox_1.Type.String(),
    locked: typebox_1.Type.Boolean(),
    map_hash: typebox_1.Type.String(),
    map_name: typebox_1.Type.String(),
    max_players: typebox_1.Type.Number(),
    name: typebox_1.Type.String(),
    password: typebox_1.Type.Union([typebox_1.Type.String(), typebox_1.Type.Null()]),
    players: typebox_1.Type.Array(typebox_1.Type.Number()),
    started_at: typebox_1.Type.Union([typebox_1.Type.Number(), typebox_1.Type.Null()]),
    tags: typebox_1.Type.Record(typebox_1.Type.String(), typebox_1.Type.String()),
    type: typebox_1.Type.String(),
    start_rectangles: typebox_1.Type.Record(typebox_1.Type.Number(), typebox_1.Type.Array(typebox_1.Type.Number())),
});
exports.responses = {
    "s.auth.disconnect": typebox_1.Type.Object({}),
    "s.system.server_event": typebox_1.Type.Object({
        event: typebox_1.Type.String(),
        node: typebox_1.Type.String()
    }),
    "s.system.pong": typebox_1.Type.Object({
        time: typebox_1.Type.Number(),
    }),
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
        user: typebox_1.Type.Optional(exports.myUserSchema),
    }),
    "s.auth.verify": typebox_1.Type.Object({
        result: typebox_1.Type.String(),
        user: typebox_1.Type.Optional(exports.myUserSchema),
        reason: typebox_1.Type.Optional(typebox_1.Type.String())
    }),
    "s.lobby.query": typebox_1.Type.Object({
        result: typebox_1.Type.String(),
        lobbies: typebox_1.Type.Array(exports.lobbySchema)
    }),
    "s.user.user_and_client_list": typebox_1.Type.Object({
        clients: typebox_1.Type.Array(exports.clientSchema),
        users: typebox_1.Type.Array(exports.userSchema),
    })
};
//# sourceMappingURL=responses.js.map