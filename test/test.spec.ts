import { SystemConnectedEvent } from "tachyon-protocol";
import { WebSocketServer } from "ws";

// eslint-disable-next-line no-restricted-imports
import { TachyonClient } from "../dist/index.js";

const server = new WebSocketServer({ port: 3877 });

const client = new TachyonClient("user", {
    host: "127.0.0.1",
    port: 3877,
    requestHandlers: {},
});

server.on("connection", (socket) => {
    const command: SystemConnectedEvent = {
        commandId: "system/connected",
        messageId: "123",
        type: "event",
        data: {
            userId: "",
            username: "",
            displayName: "bob",
            avatarUrl: null,
            clanId: null,
            partyId: null,
            scopes: [],
            status: "offline",
            battleStatus: null,
            friendIds: [],
            outgoingFriendRequestIds: [],
            incomingFriendRequestIds: [],
            ignoreIds: [],
        },
    };
    socket.send(JSON.stringify(command));
});

test("version", async () => {
    const connectionResponse = await client.connect("123");

    expect(connectionResponse.displayName).toEqual("bob");
});

afterAll(async () => {
    client.disconnect();
    server.close();
});
