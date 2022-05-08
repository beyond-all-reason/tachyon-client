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
};
