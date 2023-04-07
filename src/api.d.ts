import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace tachyon. */
export namespace tachyon {

    /** Represents a WsMessaging */
    class WsMessaging extends $protobuf.rpc.Service {

        /**
         * Constructs a new WsMessaging service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new WsMessaging service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WsMessaging;

        /**
         * Calls Client.
         * @param request ClientMessage message or plain object
         * @param callback Node-style callback called with the error, if any, and ServerMessage
         */
        public client(request: tachyon.IClientMessage, callback: tachyon.WsMessaging.ClientCallback): void;

        /**
         * Calls Client.
         * @param request ClientMessage message or plain object
         * @returns Promise
         */
        public client(request: tachyon.IClientMessage): Promise<tachyon.ServerMessage>;

        /**
         * Calls Server.
         * @param request ServerMessage message or plain object
         * @param callback Node-style callback called with the error, if any, and ClientMessage
         */
        public server(request: tachyon.IServerMessage, callback: tachyon.WsMessaging.ServerCallback): void;

        /**
         * Calls Server.
         * @param request ServerMessage message or plain object
         * @returns Promise
         */
        public server(request: tachyon.IServerMessage): Promise<tachyon.ClientMessage>;
    }

    namespace WsMessaging {

        /**
         * Callback as used by {@link tachyon.WsMessaging#client}.
         * @param error Error, if any
         * @param [response] ServerMessage
         */
        type ClientCallback = (error: (Error|null), response?: tachyon.ServerMessage) => void;

        /**
         * Callback as used by {@link tachyon.WsMessaging#server}.
         * @param error Error, if any
         * @param [response] ClientMessage
         */
        type ServerCallback = (error: (Error|null), response?: tachyon.ClientMessage) => void;
    }

    /** Represents an AccountService */
    class AccountService extends $protobuf.rpc.Service {

        /**
         * Constructs a new AccountService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new AccountService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AccountService;

        /**
         * Calls AccountMigration.
         * @param request AccountMigrationRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and AccountMigrationResponse
         */
        public accountMigration(request: tachyon.IAccountMigrationRequest, callback: tachyon.AccountService.AccountMigrationCallback): void;

        /**
         * Calls AccountMigration.
         * @param request AccountMigrationRequest message or plain object
         * @returns Promise
         */
        public accountMigration(request: tachyon.IAccountMigrationRequest): Promise<tachyon.AccountMigrationResponse>;

        /**
         * Calls WhoisMyself.
         * @param request MyselfRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and MyselfResponse
         */
        public whoisMyself(request: tachyon.IMyselfRequest, callback: tachyon.AccountService.WhoisMyselfCallback): void;

        /**
         * Calls WhoisMyself.
         * @param request MyselfRequest message or plain object
         * @returns Promise
         */
        public whoisMyself(request: tachyon.IMyselfRequest): Promise<tachyon.MyselfResponse>;

        /**
         * Calls ListUsers.
         * @param request UserListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UserListResponse
         */
        public listUsers(request: tachyon.IUserListRequest, callback: tachyon.AccountService.ListUsersCallback): void;

        /**
         * Calls ListUsers.
         * @param request UserListRequest message or plain object
         * @returns Promise
         */
        public listUsers(request: tachyon.IUserListRequest): Promise<tachyon.UserListResponse>;
    }

    namespace AccountService {

        /**
         * Callback as used by {@link tachyon.AccountService#accountMigration}.
         * @param error Error, if any
         * @param [response] AccountMigrationResponse
         */
        type AccountMigrationCallback = (error: (Error|null), response?: tachyon.AccountMigrationResponse) => void;

        /**
         * Callback as used by {@link tachyon.AccountService#whoisMyself}.
         * @param error Error, if any
         * @param [response] MyselfResponse
         */
        type WhoisMyselfCallback = (error: (Error|null), response?: tachyon.MyselfResponse) => void;

        /**
         * Callback as used by {@link tachyon.AccountService#listUsers}.
         * @param error Error, if any
         * @param [response] UserListResponse
         */
        type ListUsersCallback = (error: (Error|null), response?: tachyon.UserListResponse) => void;
    }

    /** Represents a LobbyService */
    class LobbyService extends $protobuf.rpc.Service {

        /**
         * Constructs a new LobbyService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new LobbyService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LobbyService;

        /**
         * Calls ListLobbies.
         * @param request LobbyListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LobbyListResponse
         */
        public listLobbies(request: tachyon.ILobbyListRequest, callback: tachyon.LobbyService.ListLobbiesCallback): void;

        /**
         * Calls ListLobbies.
         * @param request LobbyListRequest message or plain object
         * @returns Promise
         */
        public listLobbies(request: tachyon.ILobbyListRequest): Promise<tachyon.LobbyListResponse>;
    }

    namespace LobbyService {

        /**
         * Callback as used by {@link tachyon.LobbyService#listLobbies}.
         * @param error Error, if any
         * @param [response] LobbyListResponse
         */
        type ListLobbiesCallback = (error: (Error|null), response?: tachyon.LobbyListResponse) => void;
    }

    /** Properties of a ClientMessage. */
    interface IClientMessage {

        /** ClientMessage id */
        id?: (number|Long|null);

        /** ClientMessage empty */
        empty?: (tachyon.IEmpty|null);

        /** ClientMessage failure */
        failure?: (tachyon.IFailure|null);

        /** ClientMessage accountMigrationRequest */
        accountMigrationRequest?: (tachyon.IAccountMigrationRequest|null);

        /** ClientMessage myselfRequest */
        myselfRequest?: (tachyon.IMyselfRequest|null);

        /** ClientMessage userListRequest */
        userListRequest?: (tachyon.IUserListRequest|null);

        /** ClientMessage lobbyListRequest */
        lobbyListRequest?: (tachyon.ILobbyListRequest|null);
    }

    /** Represents a ClientMessage. */
    class ClientMessage implements IClientMessage {

        /**
         * Constructs a new ClientMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IClientMessage);

        /** ClientMessage id. */
        public id: (number|Long);

        /** ClientMessage empty. */
        public empty?: (tachyon.IEmpty|null);

        /** ClientMessage failure. */
        public failure?: (tachyon.IFailure|null);

        /** ClientMessage accountMigrationRequest. */
        public accountMigrationRequest?: (tachyon.IAccountMigrationRequest|null);

        /** ClientMessage myselfRequest. */
        public myselfRequest?: (tachyon.IMyselfRequest|null);

        /** ClientMessage userListRequest. */
        public userListRequest?: (tachyon.IUserListRequest|null);

        /** ClientMessage lobbyListRequest. */
        public lobbyListRequest?: (tachyon.ILobbyListRequest|null);

        /** ClientMessage object. */
        public object?: ("empty"|"failure"|"accountMigrationRequest"|"myselfRequest"|"userListRequest"|"lobbyListRequest");

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientMessage instance
         */
        public static create(properties?: tachyon.IClientMessage): tachyon.ClientMessage;

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link tachyon.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link tachyon.ClientMessage.verify|verify} messages.
         * @param message ClientMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IClientMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.ClientMessage;

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.ClientMessage;

        /**
         * Verifies a ClientMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientMessage
         */
        public static fromObject(object: { [k: string]: any }): tachyon.ClientMessage;

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @param message ClientMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.ClientMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ServerMessage. */
    interface IServerMessage {

        /** ServerMessage id */
        id?: (number|Long|null);

        /** ServerMessage empty */
        empty?: (tachyon.IEmpty|null);

        /** ServerMessage failure */
        failure?: (tachyon.IFailure|null);

        /** ServerMessage accountMigrationResponse */
        accountMigrationResponse?: (tachyon.IAccountMigrationResponse|null);

        /** ServerMessage myselfResponse */
        myselfResponse?: (tachyon.IMyselfResponse|null);

        /** ServerMessage userListResponse */
        userListResponse?: (tachyon.IUserListResponse|null);

        /** ServerMessage lobbyListResponse */
        lobbyListResponse?: (tachyon.ILobbyListResponse|null);
    }

    /** Represents a ServerMessage. */
    class ServerMessage implements IServerMessage {

        /**
         * Constructs a new ServerMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IServerMessage);

        /** ServerMessage id. */
        public id: (number|Long);

        /** ServerMessage empty. */
        public empty?: (tachyon.IEmpty|null);

        /** ServerMessage failure. */
        public failure?: (tachyon.IFailure|null);

        /** ServerMessage accountMigrationResponse. */
        public accountMigrationResponse?: (tachyon.IAccountMigrationResponse|null);

        /** ServerMessage myselfResponse. */
        public myselfResponse?: (tachyon.IMyselfResponse|null);

        /** ServerMessage userListResponse. */
        public userListResponse?: (tachyon.IUserListResponse|null);

        /** ServerMessage lobbyListResponse. */
        public lobbyListResponse?: (tachyon.ILobbyListResponse|null);

        /** ServerMessage object. */
        public object?: ("empty"|"failure"|"accountMigrationResponse"|"myselfResponse"|"userListResponse"|"lobbyListResponse");

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerMessage instance
         */
        public static create(properties?: tachyon.IServerMessage): tachyon.ServerMessage;

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link tachyon.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link tachyon.ServerMessage.verify|verify} messages.
         * @param message ServerMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IServerMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.ServerMessage;

        /**
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.ServerMessage;

        /**
         * Verifies a ServerMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerMessage
         */
        public static fromObject(object: { [k: string]: any }): tachyon.ServerMessage;

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @param message ServerMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.ServerMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ServerMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Failure. */
    interface IFailure {

        /** Failure action */
        action?: (string|null);

        /** Failure reason */
        reason?: (string|null);
    }

    /** Represents a Failure. */
    class Failure implements IFailure {

        /**
         * Constructs a new Failure.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IFailure);

        /** Failure action. */
        public action: string;

        /** Failure reason. */
        public reason: string;

        /**
         * Creates a new Failure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Failure instance
         */
        public static create(properties?: tachyon.IFailure): tachyon.Failure;

        /**
         * Encodes the specified Failure message. Does not implicitly {@link tachyon.Failure.verify|verify} messages.
         * @param message Failure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IFailure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Failure message, length delimited. Does not implicitly {@link tachyon.Failure.verify|verify} messages.
         * @param message Failure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IFailure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Failure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Failure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.Failure;

        /**
         * Decodes a Failure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Failure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.Failure;

        /**
         * Verifies a Failure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Failure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Failure
         */
        public static fromObject(object: { [k: string]: any }): tachyon.Failure;

        /**
         * Creates a plain object from a Failure message. Also converts values to other types if specified.
         * @param message Failure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.Failure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Failure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Failure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Empty. */
    interface IEmpty {
    }

    /** Represents an Empty. */
    class Empty implements IEmpty {

        /**
         * Constructs a new Empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IEmpty);

        /**
         * Creates a new Empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Empty instance
         */
        public static create(properties?: tachyon.IEmpty): tachyon.Empty;

        /**
         * Encodes the specified Empty message. Does not implicitly {@link tachyon.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link tachyon.Empty.verify|verify} messages.
         * @param message Empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.Empty;

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.Empty;

        /**
         * Verifies an Empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Empty
         */
        public static fromObject(object: { [k: string]: any }): tachyon.Empty;

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @param message Empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Empty
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenRequest. */
    interface ITokenRequest {

        /** TokenRequest email */
        email?: (string|null);

        /** TokenRequest password */
        password?: (string|null);
    }

    /** Represents a TokenRequest. */
    class TokenRequest implements ITokenRequest {

        /**
         * Constructs a new TokenRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.ITokenRequest);

        /** TokenRequest email. */
        public email: string;

        /** TokenRequest password. */
        public password: string;

        /**
         * Creates a new TokenRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenRequest instance
         */
        public static create(properties?: tachyon.ITokenRequest): tachyon.TokenRequest;

        /**
         * Encodes the specified TokenRequest message. Does not implicitly {@link tachyon.TokenRequest.verify|verify} messages.
         * @param message TokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.ITokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenRequest message, length delimited. Does not implicitly {@link tachyon.TokenRequest.verify|verify} messages.
         * @param message TokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.ITokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.TokenRequest;

        /**
         * Decodes a TokenRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.TokenRequest;

        /**
         * Verifies a TokenRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenRequest
         */
        public static fromObject(object: { [k: string]: any }): tachyon.TokenRequest;

        /**
         * Creates a plain object from a TokenRequest message. Also converts values to other types if specified.
         * @param message TokenRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.TokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TokenResponse. */
    interface ITokenResponse {

        /** TokenResponse token */
        token?: (string|null);
    }

    /** Represents a TokenResponse. */
    class TokenResponse implements ITokenResponse {

        /**
         * Constructs a new TokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.ITokenResponse);

        /** TokenResponse token. */
        public token: string;

        /**
         * Creates a new TokenResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenResponse instance
         */
        public static create(properties?: tachyon.ITokenResponse): tachyon.TokenResponse;

        /**
         * Encodes the specified TokenResponse message. Does not implicitly {@link tachyon.TokenResponse.verify|verify} messages.
         * @param message TokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.ITokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenResponse message, length delimited. Does not implicitly {@link tachyon.TokenResponse.verify|verify} messages.
         * @param message TokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.ITokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.TokenResponse;

        /**
         * Decodes a TokenResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.TokenResponse;

        /**
         * Verifies a TokenResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenResponse
         */
        public static fromObject(object: { [k: string]: any }): tachyon.TokenResponse;

        /**
         * Creates a plain object from a TokenResponse message. Also converts values to other types if specified.
         * @param message TokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.TokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest token */
        token?: (string|null);

        /** LoginRequest appName */
        appName?: (string|null);

        /** LoginRequest appVersion */
        appVersion?: (string|null);

        /** LoginRequest appHash */
        appHash?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.ILoginRequest);

        /** LoginRequest token. */
        public token: string;

        /** LoginRequest appName. */
        public appName: string;

        /** LoginRequest appVersion. */
        public appVersion: string;

        /** LoginRequest appHash. */
        public appHash: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: tachyon.ILoginRequest): tachyon.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link tachyon.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link tachyon.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): tachyon.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse user */
        user?: (tachyon.IUser|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.ILoginResponse);

        /** LoginResponse user. */
        public user?: (tachyon.IUser|null);

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: tachyon.ILoginResponse): tachyon.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link tachyon.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link tachyon.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): tachyon.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VerifyRequest. */
    interface IVerifyRequest {

        /** VerifyRequest token */
        token?: (string|null);

        /** VerifyRequest code */
        code?: (string|null);
    }

    /** Represents a VerifyRequest. */
    class VerifyRequest implements IVerifyRequest {

        /**
         * Constructs a new VerifyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IVerifyRequest);

        /** VerifyRequest token. */
        public token: string;

        /** VerifyRequest code. */
        public code: string;

        /**
         * Creates a new VerifyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyRequest instance
         */
        public static create(properties?: tachyon.IVerifyRequest): tachyon.VerifyRequest;

        /**
         * Encodes the specified VerifyRequest message. Does not implicitly {@link tachyon.VerifyRequest.verify|verify} messages.
         * @param message VerifyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyRequest message, length delimited. Does not implicitly {@link tachyon.VerifyRequest.verify|verify} messages.
         * @param message VerifyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.VerifyRequest;

        /**
         * Decodes a VerifyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VerifyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.VerifyRequest;

        /**
         * Verifies a VerifyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyRequest
         */
        public static fromObject(object: { [k: string]: any }): tachyon.VerifyRequest;

        /**
         * Creates a plain object from a VerifyRequest message. Also converts values to other types if specified.
         * @param message VerifyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.VerifyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VerifyRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VerifyResponse. */
    interface IVerifyResponse {

        /** VerifyResponse user */
        user?: (tachyon.IUser|null);
    }

    /** Represents a VerifyResponse. */
    class VerifyResponse implements IVerifyResponse {

        /**
         * Constructs a new VerifyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IVerifyResponse);

        /** VerifyResponse user. */
        public user?: (tachyon.IUser|null);

        /**
         * Creates a new VerifyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyResponse instance
         */
        public static create(properties?: tachyon.IVerifyResponse): tachyon.VerifyResponse;

        /**
         * Encodes the specified VerifyResponse message. Does not implicitly {@link tachyon.VerifyResponse.verify|verify} messages.
         * @param message VerifyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyResponse message, length delimited. Does not implicitly {@link tachyon.VerifyResponse.verify|verify} messages.
         * @param message VerifyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IVerifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.VerifyResponse;

        /**
         * Decodes a VerifyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VerifyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.VerifyResponse;

        /**
         * Verifies a VerifyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyResponse
         */
        public static fromObject(object: { [k: string]: any }): tachyon.VerifyResponse;

        /**
         * Creates a plain object from a VerifyResponse message. Also converts values to other types if specified.
         * @param message VerifyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.VerifyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VerifyResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DisconnectRequest. */
    interface IDisconnectRequest {

        /** DisconnectRequest reason */
        reason?: (string|null);
    }

    /** Represents a DisconnectRequest. */
    class DisconnectRequest implements IDisconnectRequest {

        /**
         * Constructs a new DisconnectRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IDisconnectRequest);

        /** DisconnectRequest reason. */
        public reason: string;

        /**
         * Creates a new DisconnectRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisconnectRequest instance
         */
        public static create(properties?: tachyon.IDisconnectRequest): tachyon.DisconnectRequest;

        /**
         * Encodes the specified DisconnectRequest message. Does not implicitly {@link tachyon.DisconnectRequest.verify|verify} messages.
         * @param message DisconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IDisconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisconnectRequest message, length delimited. Does not implicitly {@link tachyon.DisconnectRequest.verify|verify} messages.
         * @param message DisconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IDisconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisconnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.DisconnectRequest;

        /**
         * Decodes a DisconnectRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.DisconnectRequest;

        /**
         * Verifies a DisconnectRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisconnectRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisconnectRequest
         */
        public static fromObject(object: { [k: string]: any }): tachyon.DisconnectRequest;

        /**
         * Creates a plain object from a DisconnectRequest message. Also converts values to other types if specified.
         * @param message DisconnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.DisconnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisconnectRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DisconnectRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegistrationRequest. */
    interface IRegistrationRequest {

        /** RegistrationRequest username */
        username?: (string|null);

        /** RegistrationRequest email */
        email?: (string|null);

        /** RegistrationRequest password */
        password?: (string|null);
    }

    /** Represents a RegistrationRequest. */
    class RegistrationRequest implements IRegistrationRequest {

        /**
         * Constructs a new RegistrationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IRegistrationRequest);

        /** RegistrationRequest username. */
        public username: string;

        /** RegistrationRequest email. */
        public email: string;

        /** RegistrationRequest password. */
        public password: string;

        /**
         * Creates a new RegistrationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegistrationRequest instance
         */
        public static create(properties?: tachyon.IRegistrationRequest): tachyon.RegistrationRequest;

        /**
         * Encodes the specified RegistrationRequest message. Does not implicitly {@link tachyon.RegistrationRequest.verify|verify} messages.
         * @param message RegistrationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegistrationRequest message, length delimited. Does not implicitly {@link tachyon.RegistrationRequest.verify|verify} messages.
         * @param message RegistrationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegistrationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegistrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.RegistrationRequest;

        /**
         * Decodes a RegistrationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegistrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.RegistrationRequest;

        /**
         * Verifies a RegistrationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegistrationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegistrationRequest
         */
        public static fromObject(object: { [k: string]: any }): tachyon.RegistrationRequest;

        /**
         * Creates a plain object from a RegistrationRequest message. Also converts values to other types if specified.
         * @param message RegistrationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.RegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegistrationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegistrationRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegistrationResponse. */
    interface IRegistrationResponse {

        /** RegistrationResponse token */
        token?: (string|null);
    }

    /** Represents a RegistrationResponse. */
    class RegistrationResponse implements IRegistrationResponse {

        /**
         * Constructs a new RegistrationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IRegistrationResponse);

        /** RegistrationResponse token. */
        public token: string;

        /**
         * Creates a new RegistrationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegistrationResponse instance
         */
        public static create(properties?: tachyon.IRegistrationResponse): tachyon.RegistrationResponse;

        /**
         * Encodes the specified RegistrationResponse message. Does not implicitly {@link tachyon.RegistrationResponse.verify|verify} messages.
         * @param message RegistrationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IRegistrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegistrationResponse message, length delimited. Does not implicitly {@link tachyon.RegistrationResponse.verify|verify} messages.
         * @param message RegistrationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IRegistrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegistrationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegistrationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.RegistrationResponse;

        /**
         * Decodes a RegistrationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegistrationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.RegistrationResponse;

        /**
         * Verifies a RegistrationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegistrationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegistrationResponse
         */
        public static fromObject(object: { [k: string]: any }): tachyon.RegistrationResponse;

        /**
         * Creates a plain object from a RegistrationResponse message. Also converts values to other types if specified.
         * @param message RegistrationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.RegistrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegistrationResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RegistrationResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountMigrationRequest. */
    interface IAccountMigrationRequest {

        /** AccountMigrationRequest username */
        username?: (string|null);

        /** AccountMigrationRequest password */
        password?: (string|null);

        /** AccountMigrationRequest desiredEmail */
        desiredEmail?: (string|null);
    }

    /** Represents an AccountMigrationRequest. */
    class AccountMigrationRequest implements IAccountMigrationRequest {

        /**
         * Constructs a new AccountMigrationRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IAccountMigrationRequest);

        /** AccountMigrationRequest username. */
        public username: string;

        /** AccountMigrationRequest password. */
        public password: string;

        /** AccountMigrationRequest desiredEmail. */
        public desiredEmail: string;

        /**
         * Creates a new AccountMigrationRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountMigrationRequest instance
         */
        public static create(properties?: tachyon.IAccountMigrationRequest): tachyon.AccountMigrationRequest;

        /**
         * Encodes the specified AccountMigrationRequest message. Does not implicitly {@link tachyon.AccountMigrationRequest.verify|verify} messages.
         * @param message AccountMigrationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IAccountMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountMigrationRequest message, length delimited. Does not implicitly {@link tachyon.AccountMigrationRequest.verify|verify} messages.
         * @param message AccountMigrationRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IAccountMigrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountMigrationRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountMigrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.AccountMigrationRequest;

        /**
         * Decodes an AccountMigrationRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountMigrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.AccountMigrationRequest;

        /**
         * Verifies an AccountMigrationRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountMigrationRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountMigrationRequest
         */
        public static fromObject(object: { [k: string]: any }): tachyon.AccountMigrationRequest;

        /**
         * Creates a plain object from an AccountMigrationRequest message. Also converts values to other types if specified.
         * @param message AccountMigrationRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.AccountMigrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountMigrationRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountMigrationRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AccountMigrationResponse. */
    interface IAccountMigrationResponse {

        /** AccountMigrationResponse token */
        token?: (string|null);
    }

    /** Represents an AccountMigrationResponse. */
    class AccountMigrationResponse implements IAccountMigrationResponse {

        /**
         * Constructs a new AccountMigrationResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IAccountMigrationResponse);

        /** AccountMigrationResponse token. */
        public token: string;

        /**
         * Creates a new AccountMigrationResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountMigrationResponse instance
         */
        public static create(properties?: tachyon.IAccountMigrationResponse): tachyon.AccountMigrationResponse;

        /**
         * Encodes the specified AccountMigrationResponse message. Does not implicitly {@link tachyon.AccountMigrationResponse.verify|verify} messages.
         * @param message AccountMigrationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IAccountMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountMigrationResponse message, length delimited. Does not implicitly {@link tachyon.AccountMigrationResponse.verify|verify} messages.
         * @param message AccountMigrationResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IAccountMigrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountMigrationResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountMigrationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.AccountMigrationResponse;

        /**
         * Decodes an AccountMigrationResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountMigrationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.AccountMigrationResponse;

        /**
         * Verifies an AccountMigrationResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountMigrationResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountMigrationResponse
         */
        public static fromObject(object: { [k: string]: any }): tachyon.AccountMigrationResponse;

        /**
         * Creates a plain object from an AccountMigrationResponse message. Also converts values to other types if specified.
         * @param message AccountMigrationResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.AccountMigrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountMigrationResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AccountMigrationResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (number|null);

        /** User name */
        name?: (string|null);

        /** User bot */
        bot?: (boolean|null);

        /** User clanId */
        clanId?: (number|null);

        /** User icons */
        icons?: ({ [k: string]: string }|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IUser);

        /** User id. */
        public id: number;

        /** User name. */
        public name: string;

        /** User bot. */
        public bot: boolean;

        /** User clanId. */
        public clanId: number;

        /** User icons. */
        public icons: { [k: string]: string };

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: tachyon.IUser): tachyon.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link tachyon.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link tachyon.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): tachyon.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PrivateUser. */
    interface IPrivateUser {

        /** PrivateUser id */
        id?: (number|null);

        /** PrivateUser name */
        name?: (string|null);

        /** PrivateUser bot */
        bot?: (boolean|null);

        /** PrivateUser clanId */
        clanId?: (number|null);

        /** PrivateUser icons */
        icons?: ({ [k: string]: string }|null);

        /** PrivateUser permissions */
        permissions?: (string[]|null);

        /** PrivateUser friends */
        friends?: (number[]|null);

        /** PrivateUser friendRequests */
        friendRequests?: (number[]|null);

        /** PrivateUser ignores */
        ignores?: (number[]|null);
    }

    /** Represents a PrivateUser. */
    class PrivateUser implements IPrivateUser {

        /**
         * Constructs a new PrivateUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IPrivateUser);

        /** PrivateUser id. */
        public id: number;

        /** PrivateUser name. */
        public name: string;

        /** PrivateUser bot. */
        public bot: boolean;

        /** PrivateUser clanId. */
        public clanId: number;

        /** PrivateUser icons. */
        public icons: { [k: string]: string };

        /** PrivateUser permissions. */
        public permissions: string[];

        /** PrivateUser friends. */
        public friends: number[];

        /** PrivateUser friendRequests. */
        public friendRequests: number[];

        /** PrivateUser ignores. */
        public ignores: number[];

        /**
         * Creates a new PrivateUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateUser instance
         */
        public static create(properties?: tachyon.IPrivateUser): tachyon.PrivateUser;

        /**
         * Encodes the specified PrivateUser message. Does not implicitly {@link tachyon.PrivateUser.verify|verify} messages.
         * @param message PrivateUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IPrivateUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateUser message, length delimited. Does not implicitly {@link tachyon.PrivateUser.verify|verify} messages.
         * @param message PrivateUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IPrivateUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.PrivateUser;

        /**
         * Decodes a PrivateUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.PrivateUser;

        /**
         * Verifies a PrivateUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrivateUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivateUser
         */
        public static fromObject(object: { [k: string]: any }): tachyon.PrivateUser;

        /**
         * Creates a plain object from a PrivateUser message. Also converts values to other types if specified.
         * @param message PrivateUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.PrivateUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PrivateUser
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MyselfRequest. */
    interface IMyselfRequest {
    }

    /** Represents a MyselfRequest. */
    class MyselfRequest implements IMyselfRequest {

        /**
         * Constructs a new MyselfRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IMyselfRequest);

        /**
         * Creates a new MyselfRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MyselfRequest instance
         */
        public static create(properties?: tachyon.IMyselfRequest): tachyon.MyselfRequest;

        /**
         * Encodes the specified MyselfRequest message. Does not implicitly {@link tachyon.MyselfRequest.verify|verify} messages.
         * @param message MyselfRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IMyselfRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MyselfRequest message, length delimited. Does not implicitly {@link tachyon.MyselfRequest.verify|verify} messages.
         * @param message MyselfRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IMyselfRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MyselfRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MyselfRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.MyselfRequest;

        /**
         * Decodes a MyselfRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MyselfRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.MyselfRequest;

        /**
         * Verifies a MyselfRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MyselfRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MyselfRequest
         */
        public static fromObject(object: { [k: string]: any }): tachyon.MyselfRequest;

        /**
         * Creates a plain object from a MyselfRequest message. Also converts values to other types if specified.
         * @param message MyselfRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.MyselfRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MyselfRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MyselfRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MyselfResponse. */
    interface IMyselfResponse {

        /** MyselfResponse user */
        user?: (tachyon.IPrivateUser|null);
    }

    /** Represents a MyselfResponse. */
    class MyselfResponse implements IMyselfResponse {

        /**
         * Constructs a new MyselfResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IMyselfResponse);

        /** MyselfResponse user. */
        public user?: (tachyon.IPrivateUser|null);

        /**
         * Creates a new MyselfResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MyselfResponse instance
         */
        public static create(properties?: tachyon.IMyselfResponse): tachyon.MyselfResponse;

        /**
         * Encodes the specified MyselfResponse message. Does not implicitly {@link tachyon.MyselfResponse.verify|verify} messages.
         * @param message MyselfResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IMyselfResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MyselfResponse message, length delimited. Does not implicitly {@link tachyon.MyselfResponse.verify|verify} messages.
         * @param message MyselfResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IMyselfResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MyselfResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MyselfResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.MyselfResponse;

        /**
         * Decodes a MyselfResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MyselfResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.MyselfResponse;

        /**
         * Verifies a MyselfResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MyselfResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MyselfResponse
         */
        public static fromObject(object: { [k: string]: any }): tachyon.MyselfResponse;

        /**
         * Creates a plain object from a MyselfResponse message. Also converts values to other types if specified.
         * @param message MyselfResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.MyselfResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MyselfResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MyselfResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserListRequest. */
    interface IUserListRequest {

        /** UserListRequest idList */
        idList?: (number[]|null);
    }

    /** Represents a UserListRequest. */
    class UserListRequest implements IUserListRequest {

        /**
         * Constructs a new UserListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IUserListRequest);

        /** UserListRequest idList. */
        public idList: number[];

        /**
         * Creates a new UserListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserListRequest instance
         */
        public static create(properties?: tachyon.IUserListRequest): tachyon.UserListRequest;

        /**
         * Encodes the specified UserListRequest message. Does not implicitly {@link tachyon.UserListRequest.verify|verify} messages.
         * @param message UserListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IUserListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserListRequest message, length delimited. Does not implicitly {@link tachyon.UserListRequest.verify|verify} messages.
         * @param message UserListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IUserListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.UserListRequest;

        /**
         * Decodes a UserListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.UserListRequest;

        /**
         * Verifies a UserListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserListRequest
         */
        public static fromObject(object: { [k: string]: any }): tachyon.UserListRequest;

        /**
         * Creates a plain object from a UserListRequest message. Also converts values to other types if specified.
         * @param message UserListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.UserListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserListRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UserListResponse. */
    interface IUserListResponse {

        /** UserListResponse userList */
        userList?: (tachyon.IUser[]|null);
    }

    /** Represents a UserListResponse. */
    class UserListResponse implements IUserListResponse {

        /**
         * Constructs a new UserListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IUserListResponse);

        /** UserListResponse userList. */
        public userList: tachyon.IUser[];

        /**
         * Creates a new UserListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserListResponse instance
         */
        public static create(properties?: tachyon.IUserListResponse): tachyon.UserListResponse;

        /**
         * Encodes the specified UserListResponse message. Does not implicitly {@link tachyon.UserListResponse.verify|verify} messages.
         * @param message UserListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IUserListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserListResponse message, length delimited. Does not implicitly {@link tachyon.UserListResponse.verify|verify} messages.
         * @param message UserListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IUserListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.UserListResponse;

        /**
         * Decodes a UserListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.UserListResponse;

        /**
         * Verifies a UserListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserListResponse
         */
        public static fromObject(object: { [k: string]: any }): tachyon.UserListResponse;

        /**
         * Creates a plain object from a UserListResponse message. Also converts values to other types if specified.
         * @param message UserListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.UserListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserListResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LobbyListRequest. */
    interface ILobbyListRequest {

        /** LobbyListRequest idList */
        idList?: (number[]|null);

        /** LobbyListRequest locked */
        locked?: (tachyon.LobbyStatus|null);

        /** LobbyListRequest passworded */
        passworded?: (boolean|null);
    }

    /** Represents a LobbyListRequest. */
    class LobbyListRequest implements ILobbyListRequest {

        /**
         * Constructs a new LobbyListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.ILobbyListRequest);

        /** LobbyListRequest idList. */
        public idList: number[];

        /** LobbyListRequest locked. */
        public locked: tachyon.LobbyStatus;

        /** LobbyListRequest passworded. */
        public passworded: boolean;

        /**
         * Creates a new LobbyListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyListRequest instance
         */
        public static create(properties?: tachyon.ILobbyListRequest): tachyon.LobbyListRequest;

        /**
         * Encodes the specified LobbyListRequest message. Does not implicitly {@link tachyon.LobbyListRequest.verify|verify} messages.
         * @param message LobbyListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.ILobbyListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyListRequest message, length delimited. Does not implicitly {@link tachyon.LobbyListRequest.verify|verify} messages.
         * @param message LobbyListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.ILobbyListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.LobbyListRequest;

        /**
         * Decodes a LobbyListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.LobbyListRequest;

        /**
         * Verifies a LobbyListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyListRequest
         */
        public static fromObject(object: { [k: string]: any }): tachyon.LobbyListRequest;

        /**
         * Creates a plain object from a LobbyListRequest message. Also converts values to other types if specified.
         * @param message LobbyListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.LobbyListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LobbyListRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LobbyListResponse. */
    interface ILobbyListResponse {

        /** LobbyListResponse lobbyList */
        lobbyList?: (tachyon.ILobby[]|null);
    }

    /** Represents a LobbyListResponse. */
    class LobbyListResponse implements ILobbyListResponse {

        /**
         * Constructs a new LobbyListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.ILobbyListResponse);

        /** LobbyListResponse lobbyList. */
        public lobbyList: tachyon.ILobby[];

        /**
         * Creates a new LobbyListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyListResponse instance
         */
        public static create(properties?: tachyon.ILobbyListResponse): tachyon.LobbyListResponse;

        /**
         * Encodes the specified LobbyListResponse message. Does not implicitly {@link tachyon.LobbyListResponse.verify|verify} messages.
         * @param message LobbyListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.ILobbyListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyListResponse message, length delimited. Does not implicitly {@link tachyon.LobbyListResponse.verify|verify} messages.
         * @param message LobbyListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.ILobbyListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.LobbyListResponse;

        /**
         * Decodes a LobbyListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.LobbyListResponse;

        /**
         * Verifies a LobbyListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyListResponse
         */
        public static fromObject(object: { [k: string]: any }): tachyon.LobbyListResponse;

        /**
         * Creates a plain object from a LobbyListResponse message. Also converts values to other types if specified.
         * @param message LobbyListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.LobbyListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LobbyListResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** LobbyStatus enum. */
    enum LobbyStatus {
        LOBBY_UNLOCKED = 0,
        LOBBY_FRIENDS = 1,
        LOBBY_WHITELIST = 2,
        LOBBY_LOCKED = 3
    }

    /** Properties of a StartArea. */
    interface IStartArea {

        /** StartArea type */
        type?: (string|null);

        /** StartArea values */
        values?: ({ [k: string]: number }|null);
    }

    /** Represents a StartArea. */
    class StartArea implements IStartArea {

        /**
         * Constructs a new StartArea.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.IStartArea);

        /** StartArea type. */
        public type: string;

        /** StartArea values. */
        public values: { [k: string]: number };

        /**
         * Creates a new StartArea instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartArea instance
         */
        public static create(properties?: tachyon.IStartArea): tachyon.StartArea;

        /**
         * Encodes the specified StartArea message. Does not implicitly {@link tachyon.StartArea.verify|verify} messages.
         * @param message StartArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.IStartArea, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartArea message, length delimited. Does not implicitly {@link tachyon.StartArea.verify|verify} messages.
         * @param message StartArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.IStartArea, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartArea message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.StartArea;

        /**
         * Decodes a StartArea message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.StartArea;

        /**
         * Verifies a StartArea message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartArea message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartArea
         */
        public static fromObject(object: { [k: string]: any }): tachyon.StartArea;

        /**
         * Creates a plain object from a StartArea message. Also converts values to other types if specified.
         * @param message StartArea
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.StartArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartArea to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StartArea
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Lobby. */
    interface ILobby {

        /** Lobby id */
        id?: (number|null);

        /** Lobby name */
        name?: (string|null);

        /** Lobby founderId */
        founderId?: (number|null);

        /** Lobby passworded */
        passworded?: (boolean|null);

        /** Lobby locked */
        locked?: (tachyon.LobbyStatus|null);

        /** Lobby engineName */
        engineName?: (string|null);

        /** Lobby engineVersion */
        engineVersion?: (string|null);

        /** Lobby players */
        players?: (number[]|null);

        /** Lobby spectators */
        spectators?: (number[]|null);

        /** Lobby ip */
        ip?: (string|null);

        /** Lobby settings */
        settings?: ({ [k: string]: string }|null);

        /** Lobby startAreas */
        startAreas?: ({ [k: string]: tachyon.IStartArea }|null);

        /** Lobby mapName */
        mapName?: (string|null);

        /** Lobby mapHash */
        mapHash?: (string|null);

        /** Lobby public */
        "public"?: (boolean|null);
    }

    /** Represents a Lobby. */
    class Lobby implements ILobby {

        /**
         * Constructs a new Lobby.
         * @param [properties] Properties to set
         */
        constructor(properties?: tachyon.ILobby);

        /** Lobby id. */
        public id: number;

        /** Lobby name. */
        public name: string;

        /** Lobby founderId. */
        public founderId: number;

        /** Lobby passworded. */
        public passworded: boolean;

        /** Lobby locked. */
        public locked: tachyon.LobbyStatus;

        /** Lobby engineName. */
        public engineName: string;

        /** Lobby engineVersion. */
        public engineVersion: string;

        /** Lobby players. */
        public players: number[];

        /** Lobby spectators. */
        public spectators: number[];

        /** Lobby ip. */
        public ip: string;

        /** Lobby settings. */
        public settings: { [k: string]: string };

        /** Lobby startAreas. */
        public startAreas: { [k: string]: tachyon.IStartArea };

        /** Lobby mapName. */
        public mapName: string;

        /** Lobby mapHash. */
        public mapHash: string;

        /** Lobby public. */
        public public: boolean;

        /**
         * Creates a new Lobby instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Lobby instance
         */
        public static create(properties?: tachyon.ILobby): tachyon.Lobby;

        /**
         * Encodes the specified Lobby message. Does not implicitly {@link tachyon.Lobby.verify|verify} messages.
         * @param message Lobby message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tachyon.ILobby, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Lobby message, length delimited. Does not implicitly {@link tachyon.Lobby.verify|verify} messages.
         * @param message Lobby message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tachyon.ILobby, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Lobby message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tachyon.Lobby;

        /**
         * Decodes a Lobby message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tachyon.Lobby;

        /**
         * Verifies a Lobby message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Lobby message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Lobby
         */
        public static fromObject(object: { [k: string]: any }): tachyon.Lobby;

        /**
         * Creates a plain object from a Lobby message. Also converts values to other types if specified.
         * @param message Lobby
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tachyon.Lobby, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Lobby to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Lobby
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
