import { Type } from "@sinclair/typebox";

import { botSchema, lobbySchema, myUserSchema, playerSchema, userSchema } from "~/model/common";

export const responses = {
    "s.auth.disconnect": Type.Object({}), // this doesn't actually exist but keeping it here to simplify typings
    "s.system.server_event": Type.Object({
        event: Type.String(),
        node: Type.String(),
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
        reason: Type.Optional(Type.String()),
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
        reason: Type.Optional(Type.String()),
    }),
    "s.lobby.query": Type.Object({
        result: Type.String(),
        lobbies: Type.Array(
            Type.Object({
                lobby: lobbySchema,
                bots: Type.Optional(Type.Record(Type.String(), botSchema)),
                modoptions: Type.Optional(Type.Record(Type.String(), Type.String())),
            })
        ),
    }),
    "s.user.user_and_client_list": Type.Object({
        clients: Type.Array(playerSchema),
        users: Type.Array(userSchema),
    }),
    "s.lobby.join": Type.Object({
        result: Type.Union([
            Type.Literal("waiting_for_host"),
            Type.Literal("failure"),
        ]),
        reason: Type.Optional(Type.String()),
    }),
    "s.lobby_host.request_to_join": Type.Object({
        userid: Type.Number(),
    }),
    "s.lobby.join_response": Type.Union([
        Type.Object({
            result: Type.Literal("approve"),
            lobby: lobbySchema,
            bots: Type.Optional(Type.Record(Type.String(), botSchema)),
            modoptions: Type.Optional(Type.Record(Type.String(), Type.String())),
        }),
        Type.Object({
            result: Type.Literal("reject"),
            reason: Type.String(),
        }),
    ]),
    "s.lobby.announce": Type.Object({
        lobby_id: Type.Number(),
        message: Type.String(),
        sender_id: Type.Number(),
    }),
    "s.lobby.updated": Type.Object({
        lobby: lobbySchema,
        bots: Type.Optional(Type.Record(Type.String(), botSchema)),
        modoptions: Type.Optional(Type.Record(Type.String(), Type.String())),
    }),
    "s.lobby.create": Type.Union([
        Type.Object({
            result: Type.Literal("success"),
            lobby: lobbySchema,
            bots: Type.Optional(Type.Record(Type.String(), botSchema)),
            modoptions: Type.Optional(Type.Record(Type.String(), Type.String())),
        }),
        Type.Object({
            result: Type.Literal("failure"),
            reason: Type.String(),
        }),
    ]),
    "s.lobby.say": Type.Object({
        lobby_id: Type.Number(),
        sender_id: Type.Number(),
        message: Type.String(),
    }),
    "s.lobby.updated_client_battlestatus": Type.Object({
        client: playerSchema,
        lobby_id: Type.Number(),
        reason: Type.String(),
    }),
    "s.lobby.set_modoptions": Type.Object({
        new_options: Type.Record(Type.String(), Type.String()),
    }),
} as const;
