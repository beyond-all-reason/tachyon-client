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
        lobby_version: Type.String()
    }),
    "c.auth.verify": Type.Object({
        token: Type.String(),
        code: Type.String(),
    }),
    "c.auth.disconnect": Type.Void(),
};