export declare const userSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    name: import("@sinclair/typebox").TString;
    bot: import("@sinclair/typebox").TBoolean;
    clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
    country: import("@sinclair/typebox").TString;
    icons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>;
}>;
export declare const myUserSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    name: import("@sinclair/typebox").TString;
    bot: import("@sinclair/typebox").TBoolean;
    clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
    country: import("@sinclair/typebox").TString;
    icons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>;
}>, import("@sinclair/typebox").TObject<{
    friend_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    friends: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
}>]>;
export declare const clientSchema: import("@sinclair/typebox").TObject<{
    ally_team_number: import("@sinclair/typebox").TNumber;
    away: import("@sinclair/typebox").TBoolean;
    in_game: import("@sinclair/typebox").TBoolean;
    lobby_id: import("@sinclair/typebox").TNumber;
    ready: import("@sinclair/typebox").TBoolean;
    player: import("@sinclair/typebox").TBoolean;
    team_colour: import("@sinclair/typebox").TString;
    team_number: import("@sinclair/typebox").TNumber;
    userid: import("@sinclair/typebox").TNumber;
}>;
export declare const botSchema: import("@sinclair/typebox").TObject<{
    ai_dll: import("@sinclair/typebox").TString;
    player_number: import("@sinclair/typebox").TNumber;
    team_number: import("@sinclair/typebox").TNumber;
    team_colour: import("@sinclair/typebox").TString;
    handicap: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TString;
    owner_id: import("@sinclair/typebox").TNumber;
    owner_name: import("@sinclair/typebox").TString;
    player: import("@sinclair/typebox").TBoolean;
    ready: import("@sinclair/typebox").TBoolean;
    side: import("@sinclair/typebox").TNumber;
    sync: import("@sinclair/typebox").TNumber;
}>;
export declare const lobbySchema: import("@sinclair/typebox").TObject<{
    bots: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
        ai_dll: import("@sinclair/typebox").TString;
        player_number: import("@sinclair/typebox").TNumber;
        team_number: import("@sinclair/typebox").TNumber;
        team_colour: import("@sinclair/typebox").TString;
        handicap: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString;
        owner_id: import("@sinclair/typebox").TNumber;
        owner_name: import("@sinclair/typebox").TString;
        player: import("@sinclair/typebox").TBoolean;
        ready: import("@sinclair/typebox").TBoolean;
        side: import("@sinclair/typebox").TNumber;
        sync: import("@sinclair/typebox").TNumber;
    }>>;
    disabled_units: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    engine_name: import("@sinclair/typebox").TString;
    engine_version: import("@sinclair/typebox").TString;
    founder_id: import("@sinclair/typebox").TNumber;
    id: import("@sinclair/typebox").TNumber;
    in_progress: import("@sinclair/typebox").TBoolean;
    ip: import("@sinclair/typebox").TString;
    locked: import("@sinclair/typebox").TBoolean;
    map_hash: import("@sinclair/typebox").TString;
    map_name: import("@sinclair/typebox").TString;
    max_players: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TString;
    password: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    players: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    started_at: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
    tags: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
    type: import("@sinclair/typebox").TString;
}>;
export declare const responses: {
    readonly "s.auth.disconnect": import("@sinclair/typebox").TObject<{}>;
    readonly "s.system.server_event": import("@sinclair/typebox").TObject<{
        event: import("@sinclair/typebox").TString;
        node: import("@sinclair/typebox").TString;
    }>;
    readonly "s.system.pong": import("@sinclair/typebox").TObject<{
        time: import("@sinclair/typebox").TNumber;
    }>;
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
        user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            name: import("@sinclair/typebox").TString;
            bot: import("@sinclair/typebox").TBoolean;
            clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            country: import("@sinclair/typebox").TString;
            icons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>;
        }>, import("@sinclair/typebox").TObject<{
            friend_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            friends: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>]>>;
    }>;
    readonly "s.auth.verify": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            name: import("@sinclair/typebox").TString;
            bot: import("@sinclair/typebox").TBoolean;
            clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            country: import("@sinclair/typebox").TString;
            icons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>;
        }>, import("@sinclair/typebox").TObject<{
            friend_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            friends: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        }>]>>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    readonly "s.lobby.query": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        lobbies: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            bots: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{
                ai_dll: import("@sinclair/typebox").TString;
                player_number: import("@sinclair/typebox").TNumber;
                team_number: import("@sinclair/typebox").TNumber;
                team_colour: import("@sinclair/typebox").TString;
                handicap: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString;
                owner_id: import("@sinclair/typebox").TNumber;
                owner_name: import("@sinclair/typebox").TString;
                player: import("@sinclair/typebox").TBoolean;
                ready: import("@sinclair/typebox").TBoolean;
                side: import("@sinclair/typebox").TNumber;
                sync: import("@sinclair/typebox").TNumber;
            }>>;
            disabled_units: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            engine_name: import("@sinclair/typebox").TString;
            engine_version: import("@sinclair/typebox").TString;
            founder_id: import("@sinclair/typebox").TNumber;
            id: import("@sinclair/typebox").TNumber;
            in_progress: import("@sinclair/typebox").TBoolean;
            ip: import("@sinclair/typebox").TString;
            locked: import("@sinclair/typebox").TBoolean;
            map_hash: import("@sinclair/typebox").TString;
            map_name: import("@sinclair/typebox").TString;
            max_players: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString;
            password: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            players: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            started_at: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            tags: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            type: import("@sinclair/typebox").TString;
        }>>;
    }>;
    readonly "s.user.user_and_client_list": import("@sinclair/typebox").TObject<{
        clients: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            ally_team_number: import("@sinclair/typebox").TNumber;
            away: import("@sinclair/typebox").TBoolean;
            in_game: import("@sinclair/typebox").TBoolean;
            lobby_id: import("@sinclair/typebox").TNumber;
            ready: import("@sinclair/typebox").TBoolean;
            player: import("@sinclair/typebox").TBoolean;
            team_colour: import("@sinclair/typebox").TString;
            team_number: import("@sinclair/typebox").TNumber;
            userid: import("@sinclair/typebox").TNumber;
        }>>;
        users: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            name: import("@sinclair/typebox").TString;
            bot: import("@sinclair/typebox").TBoolean;
            clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            country: import("@sinclair/typebox").TString;
            icons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>;
        }>>;
    }>;
};
