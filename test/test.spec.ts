/* eslint-disable no-restricted-imports */
import WS from "jest-websocket-mock";

import { TachyonClient } from "../dist/index.js";

// const mockServer = jest.fn();
const mockServer = new WS("ws://127.0.0.1:3005", { jsonProtocol: true });

const client = new TachyonClient("127.0.0.1:3005");

beforeAll(async () => {
    await mockServer.connected;
});

// afterAll(async () => {});

test("system", () => {
    test("version", async () => {
        await client.waitFor("system", "version");
        //client.request();
    });
});
