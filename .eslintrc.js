module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    plugins: [
        "@typescript-eslint",
        "unused-imports"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    ignorePatterns: ["working-files/", "node_modules/", "dist/"],
    rules: {
        "no-console": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "indent": "off",
        "quotes": "off",
        "semi": "off",
        "space-before-function-paren": ["error", { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
        "space-before-blocks": ["error", "always"],
        "keyword-spacing": ["error"],
        "no-trailing-spaces": "error",
        "no-multiple-empty-lines": "error",
        "padded-blocks": ["error", "never"],

        "@typescript-eslint/quotes": ["error"],
        "@typescript-eslint/semi": ["error"],
        "@typescript-eslint/indent": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/ban-ts-comment": "off",
    }
};
