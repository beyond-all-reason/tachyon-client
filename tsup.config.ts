import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    bundle: true,
    clean: true,
    dts: true,
    shims: true,
    sourcemap: true,
    format: ["cjs", "esm"],
});
