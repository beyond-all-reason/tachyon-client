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
        "simple-import-sort",
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    ignorePatterns: ["working-files/", "node_modules/", "dist/"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true
        }],
        
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-namespace": "off"
    }
};
