import { defineConfig } from "tsup";

export default defineConfig({
    target: "node18",
    entry: ["src/index.ts"],
    bundle: true,
    clean: true,
    dts: true,
    shims: true,
    sourcemap: true,
    format: ["esm"],
});
