# Tachyon Client
Client API for interfacing with Beyond All Reason's Teiserver via the Tachyon protocol

## Example
```ts
(async () => {
    const client = new TachyonClient({
        host: "server2.beyondallreason.info",
        port: 8202,
        verbose: true
    });

    await client.connect();

    const { token } = await client.request("c.auth.get_token", { email: "bob@gmail.com", password: "greatpassword" });

    await client.request("c.auth.login", { token, lobby_name: "my_client", lobby_version: "1", lobby_hash: "123" });

    const { lobbies } = await client.request("c.lobby.query", { query: {} });

    console.log(lobbies[0].map_name);
})();
```