import { Type } from "@sinclair/typebox";

export const requests = {
    "c.auth.disconnect": Type.Object({}),
    "c.system.ping": Type.Object({}),
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
    "c.lobby.query": Type.Object({
        query: Type.Object({
            locked: Type.Optional(Type.Boolean()),
            in_progress: Type.Optional(Type.Boolean()),
        }),
    })
} as const;