import Ajv, { ValidateFunction } from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";
import path from "path";

const ajv = new Ajv.default({ coerceTypes: true });
addFormats.default(ajv);
ajv.addKeyword("requiresLogin");
ajv.addKeyword("requiresRole");

export async function getValidators(): Promise<Map<string, Ajv.ValidateFunction<unknown>>> {
    const tachyonProtocolPackagePath = path.resolve(__filename, "../../node_modules/tachyon-protocol/dist");

    const tachyonMetaStr = await fs.promises.readFile(`${tachyonProtocolPackagePath}/meta.json`, {
        encoding: "utf-8",
    });
    const tachyonMeta = JSON.parse(tachyonMetaStr);

    const validators: Map<string, ValidateFunction> = new Map();

    const serviceIds = tachyonMeta.ids as Record<string, Record<string, string[]>>;

    for (const serviceId in serviceIds) {
        const endpointIds = serviceIds[serviceId];
        for (const endpointId in endpointIds) {
            const commandTypes = endpointIds[endpointId];
            for (const commandType of commandTypes) {
                const commandSchemaStr = await fs.promises.readFile(
                    `${tachyonProtocolPackagePath}/${serviceId}/${endpointId}/${commandType}.json`,
                    { encoding: "utf-8" }
                );
                const commandSchema = JSON.parse(commandSchemaStr);
                const validator = ajv.compile(commandSchema);
                validators.set(`${serviceId}/${endpointId}/${commandType}`, validator);
            }
        }
    }

    return validators;
}
