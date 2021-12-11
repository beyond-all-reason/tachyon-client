import { Type } from "@sinclair/typebox";

export const clientCommandSchema = {
    "c.system.ping": Type.Void(),
    "c.auth.register": Type.Object({
        username: Type.String(),
        email: Type.String(),
        password: Type.String(),
    }),
    "c.auth.get_token": Type.Object({
        email: Type.String(),
        password: Type.String(),
    }),
    "c.auth.login": Type.Object({
        token: Type.String(),
        lobby_name: Type.String(),
        lobby_version: Type.String(),
        lobby_hash: Type.String(),
    }),
    "c.auth.verify": Type.Object({
        token: Type.String(),
        code: Type.String(),
    }),
    "c.auth.disconnect": Type.Void(),
    "c.lobby.query": Type.Union([Type.Object({
        // id: Type.Optional(Type.Integer()),
        // locked: Type.Optional(Type.Boolean()),
        // started: Type.Optional(Type.Boolean()),
        // player_count: Type.Optional(Type.Integer()),
        // spectator_count: Type.Optional(Type.Integer()),
        // user_count: Type.Optional(Type.Integer()),
        // player_list: Type.Optional(Type.Integer()),
        // spectator_list: Type.Optional(Type.Integer()),
        // user_list: Type.Optional(Type.Integer())
    }), Type.Void()])
};