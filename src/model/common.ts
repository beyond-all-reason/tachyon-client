import { Type } from "@sinclair/typebox";

export const userSchema = Type.Object({
    id: Type.Number(),
    springid: Type.Union([
        Type.Number(),
        Type.String(),
    ]), // TODO: Server will fix this
    name: Type.String(),
    bot: Type.Boolean(),
    clan_id: Type.Union([
        Type.Number(),
        Type.Null(),
    ]),
    country: Type.String(),
    icons: Type.Record(Type.String(), Type.Any()),
});

export const myUserSchema = Type.Intersect(
    [
        userSchema,
        Type.Object({
            friend_requests: Type.Array(Type.Number()),
            friends: Type.Array(Type.Number()),
            permissions: Type.Array(Type.String()),
        }),
    ],
    { unevaluatedProperties: false }
);

export const baseClientSchema = Type.Object({
    ready: Type.Boolean(),
    player: Type.Boolean(),
    team_number: Type.Number(),
    player_number: Type.Number(),
    team_colour: Type.String(),
    sync: Type.Array(
        Type.Union([
            Type.Literal("engine"),
            Type.Literal("game"),
            Type.Literal("map"),
        ])
    ),
});

export const playerSpecificSchema = Type.Object({
    userid: Type.Number(),
    lobby_id: Type.Number(),
    away: Type.Boolean(),
    in_game: Type.Boolean(),
});

export const botSpecificSchema = Type.Object({
    owner_id: Type.Number(),
    owner_name: Type.String(),
    ai_dll: Type.String(),
    handicap: Type.Number(),
    side: Type.Number(),
    name: Type.String(),
});

export const playerSchema = Type.Intersect(
    [
        baseClientSchema,
        playerSpecificSchema,
    ],
    { unevaluatedProperties: false }
);

export const botSchema = Type.Intersect(
    [
        baseClientSchema,
        botSpecificSchema,
    ],
    { unevaluatedProperties: false }
);

export const lobbySchema = Type.Object({
    bots: Type.Record(Type.String(), botSchema),
    disabled_units: Type.Array(Type.String()),
    engine_name: Type.String(),
    engine_version: Type.String(),
    founder_id: Type.Number(),
    game_name: Type.String(),
    id: Type.Number(),
    in_progress: Type.Boolean(),
    ip: Type.String(),
    locked: Type.Boolean(),
    map_hash: Type.String(),
    map_name: Type.String(),
    max_players: Type.Number(),
    name: Type.String(),
    password: Type.Boolean(),
    players: Type.Array(Type.Number()),
    started_at: Type.Union([
        Type.Number(),
        Type.Null(),
    ]),
    tags: Type.Record(Type.String(), Type.String()),
    type: Type.String(),
    start_rectangles: Type.Record(Type.Number(), Type.Array(Type.Number())),
});
