import { Type } from "@sinclair/typebox";

export const userSchema = Type.Object({
    id: Type.Number(),
    springid: Type.Union([Type.Number(), Type.String()]), // TODO: Server will fix this
    name: Type.String(),
    bot: Type.Boolean(),
    clan_id: Type.Union([Type.Number(), Type.Null()]),
    country: Type.String(),
    icons: Type.Record(Type.String(), Type.Any())
});

export const myUserSchema = Type.Intersect([
    userSchema,
    Type.Object({
        friend_requests: Type.Array(Type.Number()),
        friends: Type.Array(Type.Number()),
        permissions: Type.Array(Type.String())
    })
], { unevaluatedProperties: false });

export const clientSchema = Type.Object({
    ready: Type.Boolean(),
    player: Type.Boolean(),
    team_number: Type.Number(),
    player_number: Type.Number(),
    team_colour: Type.String(),
    sync: Type.Number(),
});

export const playerSchema = Type.Intersect([
    clientSchema,
    Type.Object({
        userid: Type.Number(),
        lobby_id: Type.Number(),
        away: Type.Boolean(),
        in_game: Type.Boolean(),
    })
], { unevaluatedProperties: false });

export const botSchema = Type.Intersect([
    clientSchema,
    Type.Object({
        owner_id: Type.Number(),
        owner_name: Type.String(),
        ai_dll: Type.String(),
        handicap: Type.Number(),
        side: Type.Number(),
        name: Type.String()
    })
], { unevaluatedProperties: false });

export const lobbySchema = Type.Object({
    bots: Type.Record(Type.String(), botSchema),
    disabled_units: Type.Array(Type.String()),
    engine_name: Type.String(),
    engine_version: Type.String(),
    founder_id: Type.Number(),
    id: Type.Number(),
    in_progress: Type.Boolean(),
    ip: Type.String(),
    locked: Type.Boolean(),
    map_hash: Type.String(),
    map_name: Type.String(),
    max_players: Type.Number(),
    name: Type.String(),
    password: Type.Union([Type.String(), Type.Null()]),
    players: Type.Array(Type.Number()),
    started_at: Type.Union([Type.Number(), Type.Null()]),
    tags: Type.Record(Type.String(), Type.String()),
    type: Type.String(),
    start_rectangles: Type.Record(Type.Number(), Type.Array(Type.Number())),
});

export const responses = {
    "s.auth.disconnect": Type.Object({}), // this doesn't actually exist but keeping it here to simplify typings
    "s.system.server_event": Type.Object({
        event: Type.String(),
        node: Type.String()
    }),
    "s.system.pong": Type.Object({
        time: Type.Number(),
    }),
    "s.auth.register": Type.Object({
        result: Type.String(),
        reason: Type.Optional(Type.String()),
    }),
    "s.auth.get_token": Type.Object({
        result: Type.String(),
        token: Type.Optional(Type.String()),
        reason: Type.Optional(Type.String())
    }),
    "s.auth.login": Type.Object({
        result: Type.String(),
        agreement: Type.Optional(Type.String()),
        reason: Type.Optional(Type.String()),
        user: Type.Optional(myUserSchema),
    }),
    "s.auth.verify": Type.Object({
        result: Type.String(),
        user: Type.Optional(myUserSchema),
        reason: Type.Optional(Type.String())
    }),
    "s.lobby.query": Type.Object({
        result: Type.String(),
        lobbies: Type.Array(lobbySchema)
    }),
    "s.user.user_and_client_list": Type.Object({
        clients: Type.Array(playerSchema),
        users: Type.Array(userSchema),
    }),
    "s.lobby.join": Type.Object({
        result: Type.Union([Type.Literal("waiting_for_host"), Type.Literal("failure")]),
        reason: Type.Optional(Type.String()),
    }),
    "s.lobby_host.request_to_join": Type.Object({
        userid: Type.Number(),
    }),
    "s.lobby.join_response": Type.Union([
        Type.Object({
            result: Type.Literal("approve"),
            lobby: lobbySchema,
        }),
        Type.Object({
            result: Type.Literal("reject"),
            reason: Type.String(),
        }),
    ]),
    "s.lobby.announce": Type.Object({
        lobby_id: Type.Number(),
        message: Type.String(),
        sender: Type.Number(),
    }),
    "s.lobby.updated": Type.Object({
        lobby: lobbySchema
    }),
    "s.lobby.create": Type.Union([
        Type.Object({
            result: Type.Literal("success"),
            lobby: lobbySchema,
        }),
        Type.Object({
            result: Type.Literal("failure"),
            reason: Type.String(),
        }),
    ]),
    "s.lobby.say": Type.Object({
        lobby_id: Type.Number(),
        sender: Type.Number(),
        message: Type.String(),
    })
} as const;