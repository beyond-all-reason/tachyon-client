export declare const serverCommandSchema: {
    "s.system.pong": import("@sinclair/typebox").TVoid;
    "s.auth.register": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    "s.auth.get_token": import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        token: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>]>;
    "s.auth.login": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        agreement: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            springid: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString;
            bot: import("@sinclair/typebox").TBoolean;
            clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TNull]>;
            friend_requests: import("@sinclair/typebox").TAny;
            friends: import("@sinclair/typebox").TAny;
        }>>;
    }>;
    "s.auth.verify": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            springid: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString;
            bot: import("@sinclair/typebox").TBoolean;
            clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TNull]>;
            friend_requests: import("@sinclair/typebox").TAny;
            friends: import("@sinclair/typebox").TAny;
        }>>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
};
