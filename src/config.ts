import { Type } from "@sinclair/typebox";
import { loadConfig } from "jaz-ts-utils";

export const config = await loadConfig({
    schema: Type.Object({
        username: Type.String(),
        password: Type.String(),
    }),
});
