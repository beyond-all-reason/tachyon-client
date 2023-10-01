module.exports = {
    extends: ["./node_modules/jaz-ts-utils/.eslintrc.js", "plugin:require-extensions/recommended"],
    env: {
        node: true,
        browser: false,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
    },
    plugins: ["import", "node"],
    rules: {
        // Rules should only be added here for testing temporarily and should eventually be moved into jaz-ts-utils to ensure consistency across projects
        "func-style": ["error", "declaration"],
        "import/extensions": ["error", "ignorePackages"],
        // "node/file-extension-in-import": ["error", "always"],
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
        // "import/resolver": {
        //     typescript: {
        //         project: "./tsconfig.json",
        //     },
        // },
    },
};
