export declare const requests: {
    readonly "c.auth.disconnect": import("@sinclair/typebox").TObject<{}>;
    readonly "c.system.ping": import("@sinclair/typebox").TObject<{}>;
    readonly "c.auth.register": import("@sinclair/typebox").TObject<{
        username: import("@sinclair/typebox").TString;
        email: import("@sinclair/typebox").TString;
        password: import("@sinclair/typebox").TString;
    }>;
    readonly "c.auth.get_token": import("@sinclair/typebox").TObject<{
        email: import("@sinclair/typebox").TString;
        password: import("@sinclair/typebox").TString;
    }>;
    readonly "c.auth.login": import("@sinclair/typebox").TObject<{
        token: import("@sinclair/typebox").TString;
        lobby_name: import("@sinclair/typebox").TString;
        lobby_version: import("@sinclair/typebox").TString;
        lobby_hash: import("@sinclair/typebox").TString;
    }>;
    readonly "c.auth.verify": import("@sinclair/typebox").TObject<{
        token: import("@sinclair/typebox").TString;
        code: import("@sinclair/typebox").TString;
    }>;
    readonly "c.lobby.query": import("@sinclair/typebox").TObject<{
        query: import("@sinclair/typebox").TObject<{
            locked: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            in_progress: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>;
    }>;
    readonly "c.user.list_users_from_ids": import("@sinclair/typebox").TObject<{
        id_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        include_clients: import("@sinclair/typebox").TLiteral<true>;
    }>;
    readonly "c.lobby.join": import("@sinclair/typebox").TObject<{
        lobby_id: import("@sinclair/typebox").TNumber;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    readonly "c.lobby_host.respond_to_join_request": import("@sinclair/typebox").TObject<{
        userid: import("@sinclair/typebox").TNumber;
        response: import("@sinclair/typebox").TString;
        reason: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"approve">, import("@sinclair/typebox").TLiteral<"reject">]>;
    }>;
    readonly "c.lobby.leave": import("@sinclair/typebox").TObject<{}>;
    readonly "c.lobby.create": import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        nattype: import("@sinclair/typebox").TString;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        port: import("@sinclair/typebox").TNumber;
        game_hash: import("@sinclair/typebox").TString;
        map_hash: import("@sinclair/typebox").TString;
        map_name: import("@sinclair/typebox").TString;
        game_name: import("@sinclair/typebox").TString;
        engine_name: import("@sinclair/typebox").TString;
        engine_version: import("@sinclair/typebox").TString;
        settings: import("@sinclair/typebox").TObject<{
            max_players: import("@sinclair/typebox").TNumber;
        }>;
    }>;
};
