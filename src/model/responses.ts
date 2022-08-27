import { Type } from "@sinclair/typebox";

import { botSchema, lobbySchema, myUserSchema, playerSchema, playerSpecificSchema, userSchema } from "~/model/common";

export const battleSchema = Type.Object({
    lobby: lobbySchema,
    bots: Type.Optional(Type.Record(Type.String(), botSchema)),
    modoptions: Type.Optional(Type.Record(Type.String(), Type.String())),
    member_list: Type.Optional(Type.Array(playerSpecificSchema)),
    script_password: Type.Optional(Type.String()),
});

export const responses = {
    /**
     * system
     */
    "s.system.server_event": Type.Object({
        event: Type.String(),
        node: Type.String(),
    }),
    "s.system.pong": Type.Object({
        time: Type.Number(),
    }),
    "s.system.watch": Type.Object({
        channel: Type.String(),
        result: Type.String(),
    }),
    "s.system.server_stats": Type.Object({
        data: Type.Object({
            in_progress_lobby_count: Type.Number(),
            lobby_count: Type.Number(),
            player_count: Type.Number(),
            user_count: Type.Number(),
        }),
    }),
    /**
     * auth
     */
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
    "s.auth.disconnect": Type.Object({}), // this doesn't actually exist as a response but keeping it here to simplify typings
    /**
     * User
     */
    "s.user.user_and_client_list": Type.Object({
        clients: Type.Array(playerSchema),
        users: Type.Array(userSchema),
    }),
    /**
     * lobby
     */
    "s.lobby.query": Type.Object({
        result: Type.String(),
        lobbies: Type.Array(battleSchema),
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
        Type.Intersect([
            Type.Object({
                result: Type.Literal("approve"),
            }),
            battleSchema,
        ]),
        Type.Object({
            result: Type.Literal("reject"),
            reason: Type.String(),
        }),
    ]),
    "s.lobby.force_join": battleSchema,
    "s.lobby.announce": Type.Object({
        lobby_id: Type.Number(),
        message: Type.String(),
        sender_id: Type.Number(),
    }),
    "s.lobby.updated": battleSchema,
    "s.lobby.create": Type.Union([
        Type.Intersect([
            Type.Object({
                result: Type.Literal("success"),
            }),
            battleSchema,
        ]),
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
        lobby_id: Type.Number(),
        new_options: Type.Record(Type.String(), Type.String()),
    }),
    "s.lobby.remove_modoptions": Type.Object({
        lobby_id: Type.Number(),
        keys: Type.Array(Type.String()),
    }),
    "s.lobby.remove_user": Type.Object({
        leaver_id: Type.Number(),
        lobby_id: Type.Number(),
    }),
    "s.lobby.leave": Type.Object({
        result: Type.Literal("success"),
    }),
    "s.lobby.update_values": Type.Object({
        lobby_id: Type.Number(),
        new_values: Type.Partial(lobbySchema),
    }),
    "s.lobby.add_user": Type.Object({
        joiner_id: Type.Number(),
        lobby_id: Type.Number(),
        user: userSchema,
        client: playerSchema,
    }),
    "s.lobby.closed": Type.Object({
        lobby_id: Type.Number(),
    }),
    "s.lobby.add_start_area": Type.Object({
        area_id: Type.Number(),
        lobby_id: Type.Number(),
        structure: Type.Object({
            shape: Type.String(),
            x1: Type.Number(),
            y1: Type.Number(),
            x2: Type.Number(),
            y2: Type.Number(),
        }),
    }),
    "s.lobby.remove_start_area": Type.Object({
        area_id: Type.Number(),
        lobby_id: Type.Number(),
    }),
    "s.lobby.add_bot": Type.Object({
        bot: botSchema,
    }),
    "s.lobby.update_bot": Type.Object({
        bot: botSchema,
    }),
    "s.lobby.remove_bot": Type.Object({
        name: Type.String(),
    }),
    "s.lobby.received_lobby_direct_announce": Type.Object({
        message: Type.String(),
        sender_id: Type.Number(),
    }),
    /**
     * communication
     */
    "s.communication.send_direct_message": Type.Object({
        result: Type.String(),
    }),
    "s.communication.received_direct_message": Type.Object({
        sender_id: Type.Number(),
        message: Type.String(),
    }),
} as const;
