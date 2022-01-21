import { Type } from "@sinclair/typebox";

const userSchema = Type.Object({
    id: Type.Number(),
    springid: Type.Number(),
    name: Type.String(),
    bot: Type.Boolean(),
    clan_id: Type.Union([Type.Number(), Type.Null()]),
    friend_requests: Type.Any(),
    friends: Type.Any()
});

export const serverCommandSchema = {
    "s.system.pong": Type.Void(),
    "s.auth.register": Type.Object({
        result: Type.String(),
        reason: Type.Optional(Type.String()),
    }),
    "s.auth.get_token": Type.Union([
        Type.Object({
            result: Type.String(),
            token: Type.Optional(Type.String()),
            reason: Type.Optional(Type.String())
        })
    ]),
    "s.auth.login": Type.Object({
        result: Type.String(),
        agreement: Type.Optional(Type.String()),
        reason: Type.Optional(Type.String()),
        user: Type.Optional(userSchema),
    }),
    "s.auth.verify": Type.Object({
        result: Type.String(),
        user: Type.Optional(userSchema),
        reason: Type.Optional(Type.String())
    }),
    "s.lobby.query": Type.Object({

    })
};