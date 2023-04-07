import fs from "fs";
import protobufjsCli from "protobufjs-cli";

(async () => {
    let jsOutput = await pbjs(["-t", "static-module", "-w", "commonjs", "-o", "src/api.js", "tachyon/protos/*.proto"]);
    jsOutput = `// @ts-nocheck\n/* eslint-disable */` + jsOutput;

    await fs.promises.mkdir("dist", { recursive: true });
    await fs.promises.writeFile("src/api.js", jsOutput);
    await fs.promises.writeFile("dist/api.js", jsOutput);

    const tsDefOutput = await pbts(["-o", "src/api.d.ts", "src/api.js"]);
    //const ids = await genIds();
    //tsDefOutput = tsDefOutput.slice(0, -2) + ids + "}";

    await fs.promises.writeFile("src/api.d.ts", tsDefOutput);
    await fs.promises.writeFile("dist/api.d.ts", tsDefOutput);
})();

async function genIds() {
    const jsonOutput = await pbjs(["-t", "json", "tachyon/protos/*.proto"]);

    await fs.promises.writeFile("src/schema.json", jsonOutput);
    await fs.promises.writeFile("dist/schema.json", jsonOutput);

    const obj = JSON.parse(jsonOutput);
    const services: Record<string, Array<{ method: string; request: string; response: string }>> = {};
    const enums: string[] = [];

    for (const key in obj.nested.tachyon.nested) {
        const val = obj.nested.tachyon.nested[key];
        if (val.methods) {
            services[key] = [];
            for (const method in val.methods) {
                services[key].push({
                    method,
                    request: val.methods[method]["requestType"],
                    response: val.methods[method]["responseType"],
                });
            }
        } else if (val.fields) {
            // messages
        } else {
            enums.push(key);
        }
    }

    const servicesStr = Object.entries(services)
        .map(([serviceId, endpoints]) => {
            return `"${serviceId}": ${endpoints
                .map(
                    (endpoint) => `{
                method: "${endpoint.method}";
                requestMessage: "${endpoint.request}";
                responseMessage: "${endpoint.response}";
            };`
                )
                .join("\n")};`;
        })
        .join("\n        ");

    return `
    type Services = {
        ${servicesStr}
    }

    type EnumId = ${enums.map((str) => `"${str}"`).join(" | ")};
`;
}

function pbjs(args: string[]): Promise<string> {
    return new Promise((resolve, reject) => {
        protobufjsCli.pbjs.main(args, (err, output) => {
            if (err || !output) {
                reject(err);
            } else {
                resolve(output);
            }
        });
    });
}

function pbts(args: string[]): Promise<string> {
    return new Promise((resolve, reject) => {
        protobufjsCli.pbts.main(args, (err, output) => {
            if (err || !output) {
                reject(err);
            } else {
                resolve(output);
            }
        });
    });
}
