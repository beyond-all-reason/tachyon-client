// copied from tachyon-server-ts

import Ajv, { ValidateFunction } from "ajv";
import addFormats from "ajv-formats";
import tachyonMeta from "tachyon-protocol/dist/meta.json" assert { type: "json" };

const ajv = new Ajv.default({ coerceTypes: true });
addFormats.default(ajv);
ajv.addKeyword("requiresLogin");
ajv.addKeyword("requiresRole");

export async function getValidators(): Promise<Map<string, Ajv.ValidateFunction<unknown>>> {
    const validators: Map<string, ValidateFunction> = new Map();

    const serviceIds = tachyonMeta.ids as Record<string, Record<string, string[]>>;

    for (const serviceId in serviceIds) {
        const endpointIds = serviceIds[serviceId];
        for (const endpointId in endpointIds) {
            const commandTypes = endpointIds[endpointId];
            for (const commandType of commandTypes) {
                const commandSchema = await import(
                    `tachyon-protocol/dist/${serviceId}/${endpointId}/${commandType}.json`,
                    { assert: { type: "json" } }
                );
                const validator = ajv.compile(commandSchema);
                validators.set(`${serviceId}/${endpointId}/${commandType}`, validator);
            }
        }
    }

    return validators;
}
