import { Type } from "@sinclair/typebox";

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
        user: Type.Optional(Type.Any()),
        agreement: Type.Optional(Type.String()),
        reason: Type.Optional(Type.String())
    }),
    "s.auth.verify": Type.Object({
        result: Type.String(),
        user: Type.Optional(Type.Any()),
        reason: Type.Optional(Type.String())
    })
};