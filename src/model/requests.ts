import { Type } from "@sinclair/typebox";

import { baseClientSchema } from "~/model/common";

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
        fields: Type.Array(Type.String()),
    }),
    "c.user.list_users_from_ids": Type.Object({
        id_list: Type.Array(Type.Number()),
        include_clients: Type.Literal(true), // forcing this to ensure the response cmd is always "s.user.user_and_client_list"
    }),
    "c.lobby.join": Type.Object({
        lobby_id: Type.Number(),
        password: Type.Optional(Type.String()),
    }),
    "c.lobby_host.respond_to_join_request": Type.Object({
        userid: Type.Number(),
        response: Type.String(),
        reason: Type.Union([
            Type.Literal("approve"),
            Type.Literal("reject"),
        ]),
    }),
    "c.lobby.leave": Type.Object({}),
    "c.lobby.create": Type.Object({
        name: Type.String(),
        nattype: Type.String(),
        password: Type.Optional(Type.String()),
        port: Type.Number(),
        game_hash: Type.String(),
        map_hash: Type.String(),
        map_name: Type.String(),
        game_name: Type.String(),
        engine_name: Type.String(),
        engine_version: Type.String(),
        settings: Type.Object({
            max_players: Type.Number(),
        }),
    }),
    "c.lobby.update_status": Type.Object({
        client: Type.Partial(baseClientSchema),
    }),
    "c.lobby.say": Type.Object({
        message: Type.String(),
    }),
    "c.communication.send_direct_message": Type.Object({
        recipient_id: Type.Number(),
        message: Type.String(),
    }),
} as const;
