import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 3877 });

// const client = new TachyonClient("user", {
//     host: "127.0.0.1",
//     port: 3877,
//     requestHandlers: {
//     },
// });

test("ok", async () => {
    // add actual tests
});

afterAll(async () => {
    //client.disconnect();
    server.close();
});
