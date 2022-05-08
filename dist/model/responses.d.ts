export declare const userSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    name: import("@sinclair/typebox").TString;
    bot: import("@sinclair/typebox").TBoolean;
    clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
    friend_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    friends: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
}>;
export declare const botSchema: import("@sinclair/typebox").TObject<{
    ai_dll: import("@sinclair/typebox").TString;
    ally_team_number: import("@sinclair/typebox").TNumber;
    handicap: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TString;
    owner_id: import("@sinclair/typebox").TNumber;
    owner_name: import("@sinclair/typebox").TString;
    player: import("@sinclair/typebox").TBoolean;
    ready: import("@sinclair/typebox").TBoolean;
    side: import("@sinclair/typebox").TNumber;
    sync: import("@sinclair/typebox").TNumber;
    team_colour: import("@sinclair/typebox").TString;
    team_number: import("@sinclair/typebox").TNumber;
}>;
export declare const responses: {
    readonly "s.system.pong": import("@sinclair/typebox").TObject<{}>;
    readonly "s.auth.register": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    readonly "s.auth.get_token": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        token: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    readonly "s.auth.login": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        agreement: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            name: import("@sinclair/typebox").TString;
            bot: import("@sinclair/typebox").TBoolean;
            clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            friend_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            friends: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>>;
    }>;
    readonly "s.auth.verify": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            name: import("@sinclair/typebox").TString;
            bot: import("@sinclair/typebox").TBoolean;
            clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            friend_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            friends: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    readonly "s.lobby.query": import("@sinclair/typebox").TObject<{
        lobbies: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            bots: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
                ai_dll: import("@sinclair/typebox").TString;
                ally_team_number: import("@sinclair/typebox").TNumber;
                handicap: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString;
                owner_id: import("@sinclair/typebox").TNumber;
                owner_name: import("@sinclair/typebox").TString;
                player: import("@sinclair/typebox").TBoolean;
                ready: import("@sinclair/typebox").TBoolean;
                side: import("@sinclair/typebox").TNumber;
                sync: import("@sinclair/typebox").TNumber;
                team_colour: import("@sinclair/typebox").TString;
                team_number: import("@sinclair/typebox").TNumber;
            }>>;
            disabled_units: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            engine_name: import("@sinclair/typebox").TString;
            engine_version: import("@sinclair/typebox").TString;
            founder_id: import("@sinclair/typebox").TNumber;
            id: import("@sinclair/typebox").TNumber;
            ip: import("@sinclair/typebox").TString;
            locked: import("@sinclair/typebox").TBoolean;
            map_hash: import("@sinclair/typebox").TString;
            map_name: import("@sinclair/typebox").TString;
            max_players: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString;
            password: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            players: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            tags: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            type: import("@sinclair/typebox").TString;
        }>>;
    }>;
};
