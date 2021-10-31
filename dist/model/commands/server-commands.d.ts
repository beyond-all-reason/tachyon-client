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
        user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        agreement: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    "s.auth.verify": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
};
