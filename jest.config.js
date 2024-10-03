// It was config.ts, but jest is broken https://github.com/jestjs/jest/issues/14740

const config = {
    preset: "ts-jest",
    testEnvironment: "node",
    rootDir: "test",
    moduleNameMapper: {
        "^@/(.*)$": "../dist/$1",
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                useESM: true,
            },
        ],
    },
    extensionsToTreatAsEsm: [".ts"],
};

export default config;
