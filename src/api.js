// @ts-nocheck
/* eslint-disable *//*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tachyon = (function() {

    /**
     * Namespace tachyon.
     * @exports tachyon
     * @namespace
     */
    var tachyon = {};

    tachyon.WsMessaging = (function() {

        /**
         * Constructs a new WsMessaging service.
         * @memberof tachyon
         * @classdesc Represents a WsMessaging
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function WsMessaging(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (WsMessaging.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = WsMessaging;

        /**
         * Creates new WsMessaging service using the specified rpc implementation.
         * @function create
         * @memberof tachyon.WsMessaging
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {WsMessaging} RPC service. Useful where requests and/or responses are streamed.
         */
        WsMessaging.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link tachyon.WsMessaging#client}.
         * @memberof tachyon.WsMessaging
         * @typedef ClientCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tachyon.ServerMessage} [response] ServerMessage
         */

        /**
         * Calls Client.
         * @function client
         * @memberof tachyon.WsMessaging
         * @instance
         * @param {tachyon.IClientMessage} request ClientMessage message or plain object
         * @param {tachyon.WsMessaging.ClientCallback} callback Node-style callback called with the error, if any, and ServerMessage
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WsMessaging.prototype.client = function client(request, callback) {
            return this.rpcCall(client, $root.tachyon.ClientMessage, $root.tachyon.ServerMessage, request, callback);
        }, "name", { value: "Client" });

        /**
         * Calls Client.
         * @function client
         * @memberof tachyon.WsMessaging
         * @instance
         * @param {tachyon.IClientMessage} request ClientMessage message or plain object
         * @returns {Promise<tachyon.ServerMessage>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link tachyon.WsMessaging#server}.
         * @memberof tachyon.WsMessaging
         * @typedef ServerCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tachyon.ClientMessage} [response] ClientMessage
         */

        /**
         * Calls Server.
         * @function server
         * @memberof tachyon.WsMessaging
         * @instance
         * @param {tachyon.IServerMessage} request ServerMessage message or plain object
         * @param {tachyon.WsMessaging.ServerCallback} callback Node-style callback called with the error, if any, and ClientMessage
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WsMessaging.prototype.server = function server(request, callback) {
            return this.rpcCall(server, $root.tachyon.ServerMessage, $root.tachyon.ClientMessage, request, callback);
        }, "name", { value: "Server" });

        /**
         * Calls Server.
         * @function server
         * @memberof tachyon.WsMessaging
         * @instance
         * @param {tachyon.IServerMessage} request ServerMessage message or plain object
         * @returns {Promise<tachyon.ClientMessage>} Promise
         * @variation 2
         */

        return WsMessaging;
    })();

    tachyon.AccountService = (function() {

        /**
         * Constructs a new AccountService service.
         * @memberof tachyon
         * @classdesc Represents an AccountService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AccountService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AccountService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AccountService;

        /**
         * Creates new AccountService service using the specified rpc implementation.
         * @function create
         * @memberof tachyon.AccountService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AccountService} RPC service. Useful where requests and/or responses are streamed.
         */
        AccountService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link tachyon.AccountService#accountMigration}.
         * @memberof tachyon.AccountService
         * @typedef AccountMigrationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tachyon.AccountMigrationResponse} [response] AccountMigrationResponse
         */

        /**
         * Calls AccountMigration.
         * @function accountMigration
         * @memberof tachyon.AccountService
         * @instance
         * @param {tachyon.IAccountMigrationRequest} request AccountMigrationRequest message or plain object
         * @param {tachyon.AccountService.AccountMigrationCallback} callback Node-style callback called with the error, if any, and AccountMigrationResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountService.prototype.accountMigration = function accountMigration(request, callback) {
            return this.rpcCall(accountMigration, $root.tachyon.AccountMigrationRequest, $root.tachyon.AccountMigrationResponse, request, callback);
        }, "name", { value: "AccountMigration" });

        /**
         * Calls AccountMigration.
         * @function accountMigration
         * @memberof tachyon.AccountService
         * @instance
         * @param {tachyon.IAccountMigrationRequest} request AccountMigrationRequest message or plain object
         * @returns {Promise<tachyon.AccountMigrationResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link tachyon.AccountService#whoisMyself}.
         * @memberof tachyon.AccountService
         * @typedef WhoisMyselfCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tachyon.MyselfResponse} [response] MyselfResponse
         */

        /**
         * Calls WhoisMyself.
         * @function whoisMyself
         * @memberof tachyon.AccountService
         * @instance
         * @param {tachyon.IMyselfRequest} request MyselfRequest message or plain object
         * @param {tachyon.AccountService.WhoisMyselfCallback} callback Node-style callback called with the error, if any, and MyselfResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountService.prototype.whoisMyself = function whoisMyself(request, callback) {
            return this.rpcCall(whoisMyself, $root.tachyon.MyselfRequest, $root.tachyon.MyselfResponse, request, callback);
        }, "name", { value: "WhoisMyself" });

        /**
         * Calls WhoisMyself.
         * @function whoisMyself
         * @memberof tachyon.AccountService
         * @instance
         * @param {tachyon.IMyselfRequest} request MyselfRequest message or plain object
         * @returns {Promise<tachyon.MyselfResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link tachyon.AccountService#listUsers}.
         * @memberof tachyon.AccountService
         * @typedef ListUsersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tachyon.UserListResponse} [response] UserListResponse
         */

        /**
         * Calls ListUsers.
         * @function listUsers
         * @memberof tachyon.AccountService
         * @instance
         * @param {tachyon.IUserListRequest} request UserListRequest message or plain object
         * @param {tachyon.AccountService.ListUsersCallback} callback Node-style callback called with the error, if any, and UserListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AccountService.prototype.listUsers = function listUsers(request, callback) {
            return this.rpcCall(listUsers, $root.tachyon.UserListRequest, $root.tachyon.UserListResponse, request, callback);
        }, "name", { value: "ListUsers" });

        /**
         * Calls ListUsers.
         * @function listUsers
         * @memberof tachyon.AccountService
         * @instance
         * @param {tachyon.IUserListRequest} request UserListRequest message or plain object
         * @returns {Promise<tachyon.UserListResponse>} Promise
         * @variation 2
         */

        return AccountService;
    })();

    tachyon.LobbyService = (function() {

        /**
         * Constructs a new LobbyService service.
         * @memberof tachyon
         * @classdesc Represents a LobbyService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function LobbyService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (LobbyService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = LobbyService;

        /**
         * Creates new LobbyService service using the specified rpc implementation.
         * @function create
         * @memberof tachyon.LobbyService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {LobbyService} RPC service. Useful where requests and/or responses are streamed.
         */
        LobbyService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link tachyon.LobbyService#listLobbies}.
         * @memberof tachyon.LobbyService
         * @typedef ListLobbiesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {tachyon.LobbyListResponse} [response] LobbyListResponse
         */

        /**
         * Calls ListLobbies.
         * @function listLobbies
         * @memberof tachyon.LobbyService
         * @instance
         * @param {tachyon.ILobbyListRequest} request LobbyListRequest message or plain object
         * @param {tachyon.LobbyService.ListLobbiesCallback} callback Node-style callback called with the error, if any, and LobbyListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(LobbyService.prototype.listLobbies = function listLobbies(request, callback) {
            return this.rpcCall(listLobbies, $root.tachyon.LobbyListRequest, $root.tachyon.LobbyListResponse, request, callback);
        }, "name", { value: "ListLobbies" });

        /**
         * Calls ListLobbies.
         * @function listLobbies
         * @memberof tachyon.LobbyService
         * @instance
         * @param {tachyon.ILobbyListRequest} request LobbyListRequest message or plain object
         * @returns {Promise<tachyon.LobbyListResponse>} Promise
         * @variation 2
         */

        return LobbyService;
    })();

    tachyon.ClientMessage = (function() {

        /**
         * Properties of a ClientMessage.
         * @memberof tachyon
         * @interface IClientMessage
         * @property {number|Long|null} [id] ClientMessage id
         * @property {tachyon.IEmpty|null} [empty] ClientMessage empty
         * @property {tachyon.IFailure|null} [failure] ClientMessage failure
         * @property {tachyon.IAccountMigrationRequest|null} [accountMigrationRequest] ClientMessage accountMigrationRequest
         * @property {tachyon.IMyselfRequest|null} [myselfRequest] ClientMessage myselfRequest
         * @property {tachyon.IUserListRequest|null} [userListRequest] ClientMessage userListRequest
         * @property {tachyon.ILobbyListRequest|null} [lobbyListRequest] ClientMessage lobbyListRequest
         */

        /**
         * Constructs a new ClientMessage.
         * @memberof tachyon
         * @classdesc Represents a ClientMessage.
         * @implements IClientMessage
         * @constructor
         * @param {tachyon.IClientMessage=} [properties] Properties to set
         */
        function ClientMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientMessage id.
         * @member {number|Long} id
         * @memberof tachyon.ClientMessage
         * @instance
         */
        ClientMessage.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ClientMessage empty.
         * @member {tachyon.IEmpty|null|undefined} empty
         * @memberof tachyon.ClientMessage
         * @instance
         */
        ClientMessage.prototype.empty = null;

        /**
         * ClientMessage failure.
         * @member {tachyon.IFailure|null|undefined} failure
         * @memberof tachyon.ClientMessage
         * @instance
         */
        ClientMessage.prototype.failure = null;

        /**
         * ClientMessage accountMigrationRequest.
         * @member {tachyon.IAccountMigrationRequest|null|undefined} accountMigrationRequest
         * @memberof tachyon.ClientMessage
         * @instance
         */
        ClientMessage.prototype.accountMigrationRequest = null;

        /**
         * ClientMessage myselfRequest.
         * @member {tachyon.IMyselfRequest|null|undefined} myselfRequest
         * @memberof tachyon.ClientMessage
         * @instance
         */
        ClientMessage.prototype.myselfRequest = null;

        /**
         * ClientMessage userListRequest.
         * @member {tachyon.IUserListRequest|null|undefined} userListRequest
         * @memberof tachyon.ClientMessage
         * @instance
         */
        ClientMessage.prototype.userListRequest = null;

        /**
         * ClientMessage lobbyListRequest.
         * @member {tachyon.ILobbyListRequest|null|undefined} lobbyListRequest
         * @memberof tachyon.ClientMessage
         * @instance
         */
        ClientMessage.prototype.lobbyListRequest = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ClientMessage object.
         * @member {"empty"|"failure"|"accountMigrationRequest"|"myselfRequest"|"userListRequest"|"lobbyListRequest"|undefined} object
         * @memberof tachyon.ClientMessage
         * @instance
         */
        Object.defineProperty(ClientMessage.prototype, "object", {
            get: $util.oneOfGetter($oneOfFields = ["empty", "failure", "accountMigrationRequest", "myselfRequest", "userListRequest", "lobbyListRequest"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @function create
         * @memberof tachyon.ClientMessage
         * @static
         * @param {tachyon.IClientMessage=} [properties] Properties to set
         * @returns {tachyon.ClientMessage} ClientMessage instance
         */
        ClientMessage.create = function create(properties) {
            return new ClientMessage(properties);
        };

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link tachyon.ClientMessage.verify|verify} messages.
         * @function encode
         * @memberof tachyon.ClientMessage
         * @static
         * @param {tachyon.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                $root.tachyon.Empty.encode(message.empty, writer.uint32(/* id 80, wireType 2 =*/642).fork()).ldelim();
            if (message.failure != null && Object.hasOwnProperty.call(message, "failure"))
                $root.tachyon.Failure.encode(message.failure, writer.uint32(/* id 81, wireType 2 =*/650).fork()).ldelim();
            if (message.accountMigrationRequest != null && Object.hasOwnProperty.call(message, "accountMigrationRequest"))
                $root.tachyon.AccountMigrationRequest.encode(message.accountMigrationRequest, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.myselfRequest != null && Object.hasOwnProperty.call(message, "myselfRequest"))
                $root.tachyon.MyselfRequest.encode(message.myselfRequest, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.userListRequest != null && Object.hasOwnProperty.call(message, "userListRequest"))
                $root.tachyon.UserListRequest.encode(message.userListRequest, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            if (message.lobbyListRequest != null && Object.hasOwnProperty.call(message, "lobbyListRequest"))
                $root.tachyon.LobbyListRequest.encode(message.lobbyListRequest, writer.uint32(/* id 120, wireType 2 =*/962).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link tachyon.ClientMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.ClientMessage
         * @static
         * @param {tachyon.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.ClientMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 80: {
                        message.empty = $root.tachyon.Empty.decode(reader, reader.uint32());
                        break;
                    }
                case 81: {
                        message.failure = $root.tachyon.Failure.decode(reader, reader.uint32());
                        break;
                    }
                case 100: {
                        message.accountMigrationRequest = $root.tachyon.AccountMigrationRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.myselfRequest = $root.tachyon.MyselfRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 102: {
                        message.userListRequest = $root.tachyon.UserListRequest.decode(reader, reader.uint32());
                        break;
                    }
                case 120: {
                        message.lobbyListRequest = $root.tachyon.LobbyListRequest.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientMessage message.
         * @function verify
         * @memberof tachyon.ClientMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.empty != null && message.hasOwnProperty("empty")) {
                properties.object = 1;
                {
                    var error = $root.tachyon.Empty.verify(message.empty);
                    if (error)
                        return "empty." + error;
                }
            }
            if (message.failure != null && message.hasOwnProperty("failure")) {
                if (properties.object === 1)
                    return "object: multiple values";
                properties.object = 1;
                {
                    var error = $root.tachyon.Failure.verify(message.failure);
                    if (error)
                        return "failure." + error;
                }
            }
            if (message.accountMigrationRequest != null && message.hasOwnProperty("accountMigrationRequest")) {
                if (properties.object === 1)
                    return "object: multiple values";
                properties.object = 1;
                {
                    var error = $root.tachyon.AccountMigrationRequest.verify(message.accountMigrationRequest);
                    if (error)
                        return "accountMigrationRequest." + error;
                }
            }
            if (message.myselfRequest != null && message.hasOwnProperty("myselfRequest")) {
                if (properties.object === 1)
                    return "object: multiple values";
                properties.object = 1;
                {
                    var error = $root.tachyon.MyselfRequest.verify(message.myselfRequest);
                    if (error)
                        return "myselfRequest." + error;
                }
            }
            if (message.userListRequest != null && message.hasOwnProperty("userListRequest")) {
                if (properties.object === 1)
                    return "object: multiple values";
                properties.object = 1;
                {
                    var error = $root.tachyon.UserListRequest.verify(message.userListRequest);
                    if (error)
                        return "userListRequest." + error;
                }
            }
            if (message.lobbyListRequest != null && message.hasOwnProperty("lobbyListRequest")) {
                if (properties.object === 1)
                    return "object: multiple values";
                properties.object = 1;
                {
                    var error = $root.tachyon.LobbyListRequest.verify(message.lobbyListRequest);
                    if (error)
                        return "lobbyListRequest." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.ClientMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.ClientMessage} ClientMessage
         */
        ClientMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.ClientMessage)
                return object;
            var message = new $root.tachyon.ClientMessage();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.empty != null) {
                if (typeof object.empty !== "object")
                    throw TypeError(".tachyon.ClientMessage.empty: object expected");
                message.empty = $root.tachyon.Empty.fromObject(object.empty);
            }
            if (object.failure != null) {
                if (typeof object.failure !== "object")
                    throw TypeError(".tachyon.ClientMessage.failure: object expected");
                message.failure = $root.tachyon.Failure.fromObject(object.failure);
            }
            if (object.accountMigrationRequest != null) {
                if (typeof object.accountMigrationRequest !== "object")
                    throw TypeError(".tachyon.ClientMessage.accountMigrationRequest: object expected");
                message.accountMigrationRequest = $root.tachyon.AccountMigrationRequest.fromObject(object.accountMigrationRequest);
            }
            if (object.myselfRequest != null) {
                if (typeof object.myselfRequest !== "object")
                    throw TypeError(".tachyon.ClientMessage.myselfRequest: object expected");
                message.myselfRequest = $root.tachyon.MyselfRequest.fromObject(object.myselfRequest);
            }
            if (object.userListRequest != null) {
                if (typeof object.userListRequest !== "object")
                    throw TypeError(".tachyon.ClientMessage.userListRequest: object expected");
                message.userListRequest = $root.tachyon.UserListRequest.fromObject(object.userListRequest);
            }
            if (object.lobbyListRequest != null) {
                if (typeof object.lobbyListRequest !== "object")
                    throw TypeError(".tachyon.ClientMessage.lobbyListRequest: object expected");
                message.lobbyListRequest = $root.tachyon.LobbyListRequest.fromObject(object.lobbyListRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.ClientMessage
         * @static
         * @param {tachyon.ClientMessage} message ClientMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.empty != null && message.hasOwnProperty("empty")) {
                object.empty = $root.tachyon.Empty.toObject(message.empty, options);
                if (options.oneofs)
                    object.object = "empty";
            }
            if (message.failure != null && message.hasOwnProperty("failure")) {
                object.failure = $root.tachyon.Failure.toObject(message.failure, options);
                if (options.oneofs)
                    object.object = "failure";
            }
            if (message.accountMigrationRequest != null && message.hasOwnProperty("accountMigrationRequest")) {
                object.accountMigrationRequest = $root.tachyon.AccountMigrationRequest.toObject(message.accountMigrationRequest, options);
                if (options.oneofs)
                    object.object = "accountMigrationRequest";
            }
            if (message.myselfRequest != null && message.hasOwnProperty("myselfRequest")) {
                object.myselfRequest = $root.tachyon.MyselfRequest.toObject(message.myselfRequest, options);
                if (options.oneofs)
                    object.object = "myselfRequest";
            }
            if (message.userListRequest != null && message.hasOwnProperty("userListRequest")) {
                object.userListRequest = $root.tachyon.UserListRequest.toObject(message.userListRequest, options);
                if (options.oneofs)
                    object.object = "userListRequest";
            }
            if (message.lobbyListRequest != null && message.hasOwnProperty("lobbyListRequest")) {
                object.lobbyListRequest = $root.tachyon.LobbyListRequest.toObject(message.lobbyListRequest, options);
                if (options.oneofs)
                    object.object = "lobbyListRequest";
            }
            return object;
        };

        /**
         * Converts this ClientMessage to JSON.
         * @function toJSON
         * @memberof tachyon.ClientMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientMessage
         * @function getTypeUrl
         * @memberof tachyon.ClientMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.ClientMessage";
        };

        return ClientMessage;
    })();

    tachyon.ServerMessage = (function() {

        /**
         * Properties of a ServerMessage.
         * @memberof tachyon
         * @interface IServerMessage
         * @property {number|Long|null} [id] ServerMessage id
         * @property {tachyon.IEmpty|null} [empty] ServerMessage empty
         * @property {tachyon.IFailure|null} [failure] ServerMessage failure
         * @property {tachyon.IAccountMigrationResponse|null} [accountMigrationResponse] ServerMessage accountMigrationResponse
         * @property {tachyon.IMyselfResponse|null} [myselfResponse] ServerMessage myselfResponse
         * @property {tachyon.IUserListResponse|null} [userListResponse] ServerMessage userListResponse
         * @property {tachyon.ILobbyListResponse|null} [lobbyListResponse] ServerMessage lobbyListResponse
         */

        /**
         * Constructs a new ServerMessage.
         * @memberof tachyon
         * @classdesc Represents a ServerMessage.
         * @implements IServerMessage
         * @constructor
         * @param {tachyon.IServerMessage=} [properties] Properties to set
         */
        function ServerMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerMessage id.
         * @member {number|Long} id
         * @memberof tachyon.ServerMessage
         * @instance
         */
        ServerMessage.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ServerMessage empty.
         * @member {tachyon.IEmpty|null|undefined} empty
         * @memberof tachyon.ServerMessage
         * @instance
         */
        ServerMessage.prototype.empty = null;

        /**
         * ServerMessage failure.
         * @member {tachyon.IFailure|null|undefined} failure
         * @memberof tachyon.ServerMessage
         * @instance
         */
        ServerMessage.prototype.failure = null;

        /**
         * ServerMessage accountMigrationResponse.
         * @member {tachyon.IAccountMigrationResponse|null|undefined} accountMigrationResponse
         * @memberof tachyon.ServerMessage
         * @instance
         */
        ServerMessage.prototype.accountMigrationResponse = null;

        /**
         * ServerMessage myselfResponse.
         * @member {tachyon.IMyselfResponse|null|undefined} myselfResponse
         * @memberof tachyon.ServerMessage
         * @instance
         */
        ServerMessage.prototype.myselfResponse = null;

        /**
         * ServerMessage userListResponse.
         * @member {tachyon.IUserListResponse|null|undefined} userListResponse
         * @memberof tachyon.ServerMessage
         * @instance
         */
        ServerMessage.prototype.userListResponse = null;

        /**
         * ServerMessage lobbyListResponse.
         * @member {tachyon.ILobbyListResponse|null|undefined} lobbyListResponse
         * @memberof tachyon.ServerMessage
         * @instance
         */
        ServerMessage.prototype.lobbyListResponse = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ServerMessage object.
         * @member {"empty"|"failure"|"accountMigrationResponse"|"myselfResponse"|"userListResponse"|"lobbyListResponse"|undefined} object
         * @memberof tachyon.ServerMessage
         * @instance
         */
        Object.defineProperty(ServerMessage.prototype, "object", {
            get: $util.oneOfGetter($oneOfFields = ["empty", "failure", "accountMigrationResponse", "myselfResponse", "userListResponse", "lobbyListResponse"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ServerMessage instance using the specified properties.
         * @function create
         * @memberof tachyon.ServerMessage
         * @static
         * @param {tachyon.IServerMessage=} [properties] Properties to set
         * @returns {tachyon.ServerMessage} ServerMessage instance
         */
        ServerMessage.create = function create(properties) {
            return new ServerMessage(properties);
        };

        /**
         * Encodes the specified ServerMessage message. Does not implicitly {@link tachyon.ServerMessage.verify|verify} messages.
         * @function encode
         * @memberof tachyon.ServerMessage
         * @static
         * @param {tachyon.IServerMessage} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                $root.tachyon.Empty.encode(message.empty, writer.uint32(/* id 80, wireType 2 =*/642).fork()).ldelim();
            if (message.failure != null && Object.hasOwnProperty.call(message, "failure"))
                $root.tachyon.Failure.encode(message.failure, writer.uint32(/* id 81, wireType 2 =*/650).fork()).ldelim();
            if (message.accountMigrationResponse != null && Object.hasOwnProperty.call(message, "accountMigrationResponse"))
                $root.tachyon.AccountMigrationResponse.encode(message.accountMigrationResponse, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.myselfResponse != null && Object.hasOwnProperty.call(message, "myselfResponse"))
                $root.tachyon.MyselfResponse.encode(message.myselfResponse, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.userListResponse != null && Object.hasOwnProperty.call(message, "userListResponse"))
                $root.tachyon.UserListResponse.encode(message.userListResponse, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            if (message.lobbyListResponse != null && Object.hasOwnProperty.call(message, "lobbyListResponse"))
                $root.tachyon.LobbyListResponse.encode(message.lobbyListResponse, writer.uint32(/* id 120, wireType 2 =*/962).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServerMessage message, length delimited. Does not implicitly {@link tachyon.ServerMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.ServerMessage
         * @static
         * @param {tachyon.IServerMessage} message ServerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerMessage message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.ServerMessage} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.ServerMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 80: {
                        message.empty = $root.tachyon.Empty.decode(reader, reader.uint32());
                        break;
                    }
                case 81: {
                        message.failure = $root.tachyon.Failure.decode(reader, reader.uint32());
                        break;
                    }
                case 100: {
                        message.accountMigrationResponse = $root.tachyon.AccountMigrationResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.myselfResponse = $root.tachyon.MyselfResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 102: {
                        message.userListResponse = $root.tachyon.UserListResponse.decode(reader, reader.uint32());
                        break;
                    }
                case 120: {
                        message.lobbyListResponse = $root.tachyon.LobbyListResponse.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.ServerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.ServerMessage} ServerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerMessage message.
         * @function verify
         * @memberof tachyon.ServerMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.empty != null && message.hasOwnProperty("empty")) {
                properties.object = 1;
                {
                    var error = $root.tachyon.Empty.verify(message.empty);
                    if (error)
                        return "empty." + error;
                }
            }
            if (message.failure != null && message.hasOwnProperty("failure")) {
                if (properties.object === 1)
                    return "object: multiple values";
                properties.object = 1;
                {
                    var error = $root.tachyon.Failure.verify(message.failure);
                    if (error)
                        return "failure." + error;
                }
            }
            if (message.accountMigrationResponse != null && message.hasOwnProperty("accountMigrationResponse")) {
                if (properties.object === 1)
                    return "object: multiple values";
                properties.object = 1;
                {
                    var error = $root.tachyon.AccountMigrationResponse.verify(message.accountMigrationResponse);
                    if (error)
                        return "accountMigrationResponse." + error;
                }
            }
            if (message.myselfResponse != null && message.hasOwnProperty("myselfResponse")) {
                if (properties.object === 1)
                    return "object: multiple values";
                properties.object = 1;
                {
                    var error = $root.tachyon.MyselfResponse.verify(message.myselfResponse);
                    if (error)
                        return "myselfResponse." + error;
                }
            }
            if (message.userListResponse != null && message.hasOwnProperty("userListResponse")) {
                if (properties.object === 1)
                    return "object: multiple values";
                properties.object = 1;
                {
                    var error = $root.tachyon.UserListResponse.verify(message.userListResponse);
                    if (error)
                        return "userListResponse." + error;
                }
            }
            if (message.lobbyListResponse != null && message.hasOwnProperty("lobbyListResponse")) {
                if (properties.object === 1)
                    return "object: multiple values";
                properties.object = 1;
                {
                    var error = $root.tachyon.LobbyListResponse.verify(message.lobbyListResponse);
                    if (error)
                        return "lobbyListResponse." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ServerMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.ServerMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.ServerMessage} ServerMessage
         */
        ServerMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.ServerMessage)
                return object;
            var message = new $root.tachyon.ServerMessage();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.empty != null) {
                if (typeof object.empty !== "object")
                    throw TypeError(".tachyon.ServerMessage.empty: object expected");
                message.empty = $root.tachyon.Empty.fromObject(object.empty);
            }
            if (object.failure != null) {
                if (typeof object.failure !== "object")
                    throw TypeError(".tachyon.ServerMessage.failure: object expected");
                message.failure = $root.tachyon.Failure.fromObject(object.failure);
            }
            if (object.accountMigrationResponse != null) {
                if (typeof object.accountMigrationResponse !== "object")
                    throw TypeError(".tachyon.ServerMessage.accountMigrationResponse: object expected");
                message.accountMigrationResponse = $root.tachyon.AccountMigrationResponse.fromObject(object.accountMigrationResponse);
            }
            if (object.myselfResponse != null) {
                if (typeof object.myselfResponse !== "object")
                    throw TypeError(".tachyon.ServerMessage.myselfResponse: object expected");
                message.myselfResponse = $root.tachyon.MyselfResponse.fromObject(object.myselfResponse);
            }
            if (object.userListResponse != null) {
                if (typeof object.userListResponse !== "object")
                    throw TypeError(".tachyon.ServerMessage.userListResponse: object expected");
                message.userListResponse = $root.tachyon.UserListResponse.fromObject(object.userListResponse);
            }
            if (object.lobbyListResponse != null) {
                if (typeof object.lobbyListResponse !== "object")
                    throw TypeError(".tachyon.ServerMessage.lobbyListResponse: object expected");
                message.lobbyListResponse = $root.tachyon.LobbyListResponse.fromObject(object.lobbyListResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.ServerMessage
         * @static
         * @param {tachyon.ServerMessage} message ServerMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.empty != null && message.hasOwnProperty("empty")) {
                object.empty = $root.tachyon.Empty.toObject(message.empty, options);
                if (options.oneofs)
                    object.object = "empty";
            }
            if (message.failure != null && message.hasOwnProperty("failure")) {
                object.failure = $root.tachyon.Failure.toObject(message.failure, options);
                if (options.oneofs)
                    object.object = "failure";
            }
            if (message.accountMigrationResponse != null && message.hasOwnProperty("accountMigrationResponse")) {
                object.accountMigrationResponse = $root.tachyon.AccountMigrationResponse.toObject(message.accountMigrationResponse, options);
                if (options.oneofs)
                    object.object = "accountMigrationResponse";
            }
            if (message.myselfResponse != null && message.hasOwnProperty("myselfResponse")) {
                object.myselfResponse = $root.tachyon.MyselfResponse.toObject(message.myselfResponse, options);
                if (options.oneofs)
                    object.object = "myselfResponse";
            }
            if (message.userListResponse != null && message.hasOwnProperty("userListResponse")) {
                object.userListResponse = $root.tachyon.UserListResponse.toObject(message.userListResponse, options);
                if (options.oneofs)
                    object.object = "userListResponse";
            }
            if (message.lobbyListResponse != null && message.hasOwnProperty("lobbyListResponse")) {
                object.lobbyListResponse = $root.tachyon.LobbyListResponse.toObject(message.lobbyListResponse, options);
                if (options.oneofs)
                    object.object = "lobbyListResponse";
            }
            return object;
        };

        /**
         * Converts this ServerMessage to JSON.
         * @function toJSON
         * @memberof tachyon.ServerMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerMessage
         * @function getTypeUrl
         * @memberof tachyon.ServerMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.ServerMessage";
        };

        return ServerMessage;
    })();

    tachyon.Failure = (function() {

        /**
         * Properties of a Failure.
         * @memberof tachyon
         * @interface IFailure
         * @property {string|null} [action] Failure action
         * @property {string|null} [reason] Failure reason
         */

        /**
         * Constructs a new Failure.
         * @memberof tachyon
         * @classdesc Represents a Failure.
         * @implements IFailure
         * @constructor
         * @param {tachyon.IFailure=} [properties] Properties to set
         */
        function Failure(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Failure action.
         * @member {string} action
         * @memberof tachyon.Failure
         * @instance
         */
        Failure.prototype.action = "";

        /**
         * Failure reason.
         * @member {string} reason
         * @memberof tachyon.Failure
         * @instance
         */
        Failure.prototype.reason = "";

        /**
         * Creates a new Failure instance using the specified properties.
         * @function create
         * @memberof tachyon.Failure
         * @static
         * @param {tachyon.IFailure=} [properties] Properties to set
         * @returns {tachyon.Failure} Failure instance
         */
        Failure.create = function create(properties) {
            return new Failure(properties);
        };

        /**
         * Encodes the specified Failure message. Does not implicitly {@link tachyon.Failure.verify|verify} messages.
         * @function encode
         * @memberof tachyon.Failure
         * @static
         * @param {tachyon.IFailure} message Failure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Failure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.action);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified Failure message, length delimited. Does not implicitly {@link tachyon.Failure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.Failure
         * @static
         * @param {tachyon.IFailure} message Failure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Failure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Failure message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.Failure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.Failure} Failure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Failure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.Failure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.action = reader.string();
                        break;
                    }
                case 2: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Failure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.Failure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.Failure} Failure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Failure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Failure message.
         * @function verify
         * @memberof tachyon.Failure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Failure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates a Failure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.Failure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.Failure} Failure
         */
        Failure.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.Failure)
                return object;
            var message = new $root.tachyon.Failure();
            if (object.action != null)
                message.action = String(object.action);
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from a Failure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.Failure
         * @static
         * @param {tachyon.Failure} message Failure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Failure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.action = "";
                object.reason = "";
            }
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this Failure to JSON.
         * @function toJSON
         * @memberof tachyon.Failure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Failure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Failure
         * @function getTypeUrl
         * @memberof tachyon.Failure
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Failure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.Failure";
        };

        return Failure;
    })();

    tachyon.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof tachyon
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof tachyon
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {tachyon.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof tachyon.Empty
         * @static
         * @param {tachyon.IEmpty=} [properties] Properties to set
         * @returns {tachyon.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link tachyon.Empty.verify|verify} messages.
         * @function encode
         * @memberof tachyon.Empty
         * @static
         * @param {tachyon.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link tachyon.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.Empty
         * @static
         * @param {tachyon.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof tachyon.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.Empty)
                return object;
            return new $root.tachyon.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.Empty
         * @static
         * @param {tachyon.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof tachyon.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof tachyon.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.Empty";
        };

        return Empty;
    })();

    tachyon.TokenRequest = (function() {

        /**
         * Properties of a TokenRequest.
         * @memberof tachyon
         * @interface ITokenRequest
         * @property {string|null} [email] TokenRequest email
         * @property {string|null} [password] TokenRequest password
         */

        /**
         * Constructs a new TokenRequest.
         * @memberof tachyon
         * @classdesc Represents a TokenRequest.
         * @implements ITokenRequest
         * @constructor
         * @param {tachyon.ITokenRequest=} [properties] Properties to set
         */
        function TokenRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenRequest email.
         * @member {string} email
         * @memberof tachyon.TokenRequest
         * @instance
         */
        TokenRequest.prototype.email = "";

        /**
         * TokenRequest password.
         * @member {string} password
         * @memberof tachyon.TokenRequest
         * @instance
         */
        TokenRequest.prototype.password = "";

        /**
         * Creates a new TokenRequest instance using the specified properties.
         * @function create
         * @memberof tachyon.TokenRequest
         * @static
         * @param {tachyon.ITokenRequest=} [properties] Properties to set
         * @returns {tachyon.TokenRequest} TokenRequest instance
         */
        TokenRequest.create = function create(properties) {
            return new TokenRequest(properties);
        };

        /**
         * Encodes the specified TokenRequest message. Does not implicitly {@link tachyon.TokenRequest.verify|verify} messages.
         * @function encode
         * @memberof tachyon.TokenRequest
         * @static
         * @param {tachyon.ITokenRequest} message TokenRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified TokenRequest message, length delimited. Does not implicitly {@link tachyon.TokenRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.TokenRequest
         * @static
         * @param {tachyon.ITokenRequest} message TokenRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.TokenRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.TokenRequest} TokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.TokenRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.email = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.TokenRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.TokenRequest} TokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenRequest message.
         * @function verify
         * @memberof tachyon.TokenRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a TokenRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.TokenRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.TokenRequest} TokenRequest
         */
        TokenRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.TokenRequest)
                return object;
            var message = new $root.tachyon.TokenRequest();
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a TokenRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.TokenRequest
         * @static
         * @param {tachyon.TokenRequest} message TokenRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.email = "";
                object.password = "";
            }
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this TokenRequest to JSON.
         * @function toJSON
         * @memberof tachyon.TokenRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenRequest
         * @function getTypeUrl
         * @memberof tachyon.TokenRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.TokenRequest";
        };

        return TokenRequest;
    })();

    tachyon.TokenResponse = (function() {

        /**
         * Properties of a TokenResponse.
         * @memberof tachyon
         * @interface ITokenResponse
         * @property {string|null} [token] TokenResponse token
         */

        /**
         * Constructs a new TokenResponse.
         * @memberof tachyon
         * @classdesc Represents a TokenResponse.
         * @implements ITokenResponse
         * @constructor
         * @param {tachyon.ITokenResponse=} [properties] Properties to set
         */
        function TokenResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenResponse token.
         * @member {string} token
         * @memberof tachyon.TokenResponse
         * @instance
         */
        TokenResponse.prototype.token = "";

        /**
         * Creates a new TokenResponse instance using the specified properties.
         * @function create
         * @memberof tachyon.TokenResponse
         * @static
         * @param {tachyon.ITokenResponse=} [properties] Properties to set
         * @returns {tachyon.TokenResponse} TokenResponse instance
         */
        TokenResponse.create = function create(properties) {
            return new TokenResponse(properties);
        };

        /**
         * Encodes the specified TokenResponse message. Does not implicitly {@link tachyon.TokenResponse.verify|verify} messages.
         * @function encode
         * @memberof tachyon.TokenResponse
         * @static
         * @param {tachyon.ITokenResponse} message TokenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified TokenResponse message, length delimited. Does not implicitly {@link tachyon.TokenResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.TokenResponse
         * @static
         * @param {tachyon.ITokenResponse} message TokenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenResponse message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.TokenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.TokenResponse} TokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.TokenResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.TokenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.TokenResponse} TokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenResponse message.
         * @function verify
         * @memberof tachyon.TokenResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a TokenResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.TokenResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.TokenResponse} TokenResponse
         */
        TokenResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.TokenResponse)
                return object;
            var message = new $root.tachyon.TokenResponse();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a TokenResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.TokenResponse
         * @static
         * @param {tachyon.TokenResponse} message TokenResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this TokenResponse to JSON.
         * @function toJSON
         * @memberof tachyon.TokenResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenResponse
         * @function getTypeUrl
         * @memberof tachyon.TokenResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.TokenResponse";
        };

        return TokenResponse;
    })();

    tachyon.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof tachyon
         * @interface ILoginRequest
         * @property {string|null} [token] LoginRequest token
         * @property {string|null} [appName] LoginRequest appName
         * @property {string|null} [appVersion] LoginRequest appVersion
         * @property {string|null} [appHash] LoginRequest appHash
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof tachyon
         * @classdesc Represents a LoginRequest.
         * @implements ILoginRequest
         * @constructor
         * @param {tachyon.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest token.
         * @member {string} token
         * @memberof tachyon.LoginRequest
         * @instance
         */
        LoginRequest.prototype.token = "";

        /**
         * LoginRequest appName.
         * @member {string} appName
         * @memberof tachyon.LoginRequest
         * @instance
         */
        LoginRequest.prototype.appName = "";

        /**
         * LoginRequest appVersion.
         * @member {string} appVersion
         * @memberof tachyon.LoginRequest
         * @instance
         */
        LoginRequest.prototype.appVersion = "";

        /**
         * LoginRequest appHash.
         * @member {string} appHash
         * @memberof tachyon.LoginRequest
         * @instance
         */
        LoginRequest.prototype.appHash = "";

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof tachyon.LoginRequest
         * @static
         * @param {tachyon.ILoginRequest=} [properties] Properties to set
         * @returns {tachyon.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link tachyon.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof tachyon.LoginRequest
         * @static
         * @param {tachyon.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.appName != null && Object.hasOwnProperty.call(message, "appName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appName);
            if (message.appVersion != null && Object.hasOwnProperty.call(message, "appVersion"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.appVersion);
            if (message.appHash != null && Object.hasOwnProperty.call(message, "appHash"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.appHash);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link tachyon.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.LoginRequest
         * @static
         * @param {tachyon.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                case 2: {
                        message.appName = reader.string();
                        break;
                    }
                case 3: {
                        message.appVersion = reader.string();
                        break;
                    }
                case 4: {
                        message.appHash = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof tachyon.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.appName != null && message.hasOwnProperty("appName"))
                if (!$util.isString(message.appName))
                    return "appName: string expected";
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                if (!$util.isString(message.appVersion))
                    return "appVersion: string expected";
            if (message.appHash != null && message.hasOwnProperty("appHash"))
                if (!$util.isString(message.appHash))
                    return "appHash: string expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.LoginRequest)
                return object;
            var message = new $root.tachyon.LoginRequest();
            if (object.token != null)
                message.token = String(object.token);
            if (object.appName != null)
                message.appName = String(object.appName);
            if (object.appVersion != null)
                message.appVersion = String(object.appVersion);
            if (object.appHash != null)
                message.appHash = String(object.appHash);
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.LoginRequest
         * @static
         * @param {tachyon.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.appName = "";
                object.appVersion = "";
                object.appHash = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.appName != null && message.hasOwnProperty("appName"))
                object.appName = message.appName;
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                object.appVersion = message.appVersion;
            if (message.appHash != null && message.hasOwnProperty("appHash"))
                object.appHash = message.appHash;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof tachyon.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginRequest
         * @function getTypeUrl
         * @memberof tachyon.LoginRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.LoginRequest";
        };

        return LoginRequest;
    })();

    tachyon.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof tachyon
         * @interface ILoginResponse
         * @property {tachyon.IUser|null} [user] LoginResponse user
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof tachyon
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {tachyon.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse user.
         * @member {tachyon.IUser|null|undefined} user
         * @memberof tachyon.LoginResponse
         * @instance
         */
        LoginResponse.prototype.user = null;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof tachyon.LoginResponse
         * @static
         * @param {tachyon.ILoginResponse=} [properties] Properties to set
         * @returns {tachyon.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link tachyon.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof tachyon.LoginResponse
         * @static
         * @param {tachyon.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.tachyon.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link tachyon.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.LoginResponse
         * @static
         * @param {tachyon.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.tachyon.User.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof tachyon.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.tachyon.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.LoginResponse)
                return object;
            var message = new $root.tachyon.LoginResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".tachyon.LoginResponse.user: object expected");
                message.user = $root.tachyon.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.LoginResponse
         * @static
         * @param {tachyon.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.tachyon.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof tachyon.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginResponse
         * @function getTypeUrl
         * @memberof tachyon.LoginResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.LoginResponse";
        };

        return LoginResponse;
    })();

    tachyon.VerifyRequest = (function() {

        /**
         * Properties of a VerifyRequest.
         * @memberof tachyon
         * @interface IVerifyRequest
         * @property {string|null} [token] VerifyRequest token
         * @property {string|null} [code] VerifyRequest code
         */

        /**
         * Constructs a new VerifyRequest.
         * @memberof tachyon
         * @classdesc Represents a VerifyRequest.
         * @implements IVerifyRequest
         * @constructor
         * @param {tachyon.IVerifyRequest=} [properties] Properties to set
         */
        function VerifyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyRequest token.
         * @member {string} token
         * @memberof tachyon.VerifyRequest
         * @instance
         */
        VerifyRequest.prototype.token = "";

        /**
         * VerifyRequest code.
         * @member {string} code
         * @memberof tachyon.VerifyRequest
         * @instance
         */
        VerifyRequest.prototype.code = "";

        /**
         * Creates a new VerifyRequest instance using the specified properties.
         * @function create
         * @memberof tachyon.VerifyRequest
         * @static
         * @param {tachyon.IVerifyRequest=} [properties] Properties to set
         * @returns {tachyon.VerifyRequest} VerifyRequest instance
         */
        VerifyRequest.create = function create(properties) {
            return new VerifyRequest(properties);
        };

        /**
         * Encodes the specified VerifyRequest message. Does not implicitly {@link tachyon.VerifyRequest.verify|verify} messages.
         * @function encode
         * @memberof tachyon.VerifyRequest
         * @static
         * @param {tachyon.IVerifyRequest} message VerifyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified VerifyRequest message, length delimited. Does not implicitly {@link tachyon.VerifyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.VerifyRequest
         * @static
         * @param {tachyon.IVerifyRequest} message VerifyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VerifyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.VerifyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.VerifyRequest} VerifyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.VerifyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                case 2: {
                        message.code = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VerifyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.VerifyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.VerifyRequest} VerifyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VerifyRequest message.
         * @function verify
         * @memberof tachyon.VerifyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VerifyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a VerifyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.VerifyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.VerifyRequest} VerifyRequest
         */
        VerifyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.VerifyRequest)
                return object;
            var message = new $root.tachyon.VerifyRequest();
            if (object.token != null)
                message.token = String(object.token);
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a VerifyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.VerifyRequest
         * @static
         * @param {tachyon.VerifyRequest} message VerifyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.token = "";
                object.code = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this VerifyRequest to JSON.
         * @function toJSON
         * @memberof tachyon.VerifyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VerifyRequest
         * @function getTypeUrl
         * @memberof tachyon.VerifyRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VerifyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.VerifyRequest";
        };

        return VerifyRequest;
    })();

    tachyon.VerifyResponse = (function() {

        /**
         * Properties of a VerifyResponse.
         * @memberof tachyon
         * @interface IVerifyResponse
         * @property {tachyon.IUser|null} [user] VerifyResponse user
         */

        /**
         * Constructs a new VerifyResponse.
         * @memberof tachyon
         * @classdesc Represents a VerifyResponse.
         * @implements IVerifyResponse
         * @constructor
         * @param {tachyon.IVerifyResponse=} [properties] Properties to set
         */
        function VerifyResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifyResponse user.
         * @member {tachyon.IUser|null|undefined} user
         * @memberof tachyon.VerifyResponse
         * @instance
         */
        VerifyResponse.prototype.user = null;

        /**
         * Creates a new VerifyResponse instance using the specified properties.
         * @function create
         * @memberof tachyon.VerifyResponse
         * @static
         * @param {tachyon.IVerifyResponse=} [properties] Properties to set
         * @returns {tachyon.VerifyResponse} VerifyResponse instance
         */
        VerifyResponse.create = function create(properties) {
            return new VerifyResponse(properties);
        };

        /**
         * Encodes the specified VerifyResponse message. Does not implicitly {@link tachyon.VerifyResponse.verify|verify} messages.
         * @function encode
         * @memberof tachyon.VerifyResponse
         * @static
         * @param {tachyon.IVerifyResponse} message VerifyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.tachyon.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VerifyResponse message, length delimited. Does not implicitly {@link tachyon.VerifyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.VerifyResponse
         * @static
         * @param {tachyon.IVerifyResponse} message VerifyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VerifyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.VerifyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.VerifyResponse} VerifyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.VerifyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.tachyon.User.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VerifyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.VerifyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.VerifyResponse} VerifyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VerifyResponse message.
         * @function verify
         * @memberof tachyon.VerifyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VerifyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.tachyon.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a VerifyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.VerifyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.VerifyResponse} VerifyResponse
         */
        VerifyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.VerifyResponse)
                return object;
            var message = new $root.tachyon.VerifyResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".tachyon.VerifyResponse.user: object expected");
                message.user = $root.tachyon.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a VerifyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.VerifyResponse
         * @static
         * @param {tachyon.VerifyResponse} message VerifyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.tachyon.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this VerifyResponse to JSON.
         * @function toJSON
         * @memberof tachyon.VerifyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VerifyResponse
         * @function getTypeUrl
         * @memberof tachyon.VerifyResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VerifyResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.VerifyResponse";
        };

        return VerifyResponse;
    })();

    tachyon.DisconnectRequest = (function() {

        /**
         * Properties of a DisconnectRequest.
         * @memberof tachyon
         * @interface IDisconnectRequest
         * @property {string|null} [reason] DisconnectRequest reason
         */

        /**
         * Constructs a new DisconnectRequest.
         * @memberof tachyon
         * @classdesc Represents a DisconnectRequest.
         * @implements IDisconnectRequest
         * @constructor
         * @param {tachyon.IDisconnectRequest=} [properties] Properties to set
         */
        function DisconnectRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisconnectRequest reason.
         * @member {string} reason
         * @memberof tachyon.DisconnectRequest
         * @instance
         */
        DisconnectRequest.prototype.reason = "";

        /**
         * Creates a new DisconnectRequest instance using the specified properties.
         * @function create
         * @memberof tachyon.DisconnectRequest
         * @static
         * @param {tachyon.IDisconnectRequest=} [properties] Properties to set
         * @returns {tachyon.DisconnectRequest} DisconnectRequest instance
         */
        DisconnectRequest.create = function create(properties) {
            return new DisconnectRequest(properties);
        };

        /**
         * Encodes the specified DisconnectRequest message. Does not implicitly {@link tachyon.DisconnectRequest.verify|verify} messages.
         * @function encode
         * @memberof tachyon.DisconnectRequest
         * @static
         * @param {tachyon.IDisconnectRequest} message DisconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisconnectRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified DisconnectRequest message, length delimited. Does not implicitly {@link tachyon.DisconnectRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.DisconnectRequest
         * @static
         * @param {tachyon.IDisconnectRequest} message DisconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisconnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisconnectRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.DisconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.DisconnectRequest} DisconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisconnectRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.DisconnectRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.reason = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisconnectRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.DisconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.DisconnectRequest} DisconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisconnectRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisconnectRequest message.
         * @function verify
         * @memberof tachyon.DisconnectRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisconnectRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates a DisconnectRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.DisconnectRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.DisconnectRequest} DisconnectRequest
         */
        DisconnectRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.DisconnectRequest)
                return object;
            var message = new $root.tachyon.DisconnectRequest();
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from a DisconnectRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.DisconnectRequest
         * @static
         * @param {tachyon.DisconnectRequest} message DisconnectRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisconnectRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reason = "";
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this DisconnectRequest to JSON.
         * @function toJSON
         * @memberof tachyon.DisconnectRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisconnectRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DisconnectRequest
         * @function getTypeUrl
         * @memberof tachyon.DisconnectRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DisconnectRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.DisconnectRequest";
        };

        return DisconnectRequest;
    })();

    tachyon.RegistrationRequest = (function() {

        /**
         * Properties of a RegistrationRequest.
         * @memberof tachyon
         * @interface IRegistrationRequest
         * @property {string|null} [username] RegistrationRequest username
         * @property {string|null} [email] RegistrationRequest email
         * @property {string|null} [password] RegistrationRequest password
         */

        /**
         * Constructs a new RegistrationRequest.
         * @memberof tachyon
         * @classdesc Represents a RegistrationRequest.
         * @implements IRegistrationRequest
         * @constructor
         * @param {tachyon.IRegistrationRequest=} [properties] Properties to set
         */
        function RegistrationRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegistrationRequest username.
         * @member {string} username
         * @memberof tachyon.RegistrationRequest
         * @instance
         */
        RegistrationRequest.prototype.username = "";

        /**
         * RegistrationRequest email.
         * @member {string} email
         * @memberof tachyon.RegistrationRequest
         * @instance
         */
        RegistrationRequest.prototype.email = "";

        /**
         * RegistrationRequest password.
         * @member {string} password
         * @memberof tachyon.RegistrationRequest
         * @instance
         */
        RegistrationRequest.prototype.password = "";

        /**
         * Creates a new RegistrationRequest instance using the specified properties.
         * @function create
         * @memberof tachyon.RegistrationRequest
         * @static
         * @param {tachyon.IRegistrationRequest=} [properties] Properties to set
         * @returns {tachyon.RegistrationRequest} RegistrationRequest instance
         */
        RegistrationRequest.create = function create(properties) {
            return new RegistrationRequest(properties);
        };

        /**
         * Encodes the specified RegistrationRequest message. Does not implicitly {@link tachyon.RegistrationRequest.verify|verify} messages.
         * @function encode
         * @memberof tachyon.RegistrationRequest
         * @static
         * @param {tachyon.IRegistrationRequest} message RegistrationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistrationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified RegistrationRequest message, length delimited. Does not implicitly {@link tachyon.RegistrationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.RegistrationRequest
         * @static
         * @param {tachyon.IRegistrationRequest} message RegistrationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistrationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegistrationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.RegistrationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.RegistrationRequest} RegistrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistrationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.RegistrationRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.username = reader.string();
                        break;
                    }
                case 2: {
                        message.email = reader.string();
                        break;
                    }
                case 3: {
                        message.password = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegistrationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.RegistrationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.RegistrationRequest} RegistrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistrationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegistrationRequest message.
         * @function verify
         * @memberof tachyon.RegistrationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegistrationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a RegistrationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.RegistrationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.RegistrationRequest} RegistrationRequest
         */
        RegistrationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.RegistrationRequest)
                return object;
            var message = new $root.tachyon.RegistrationRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a RegistrationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.RegistrationRequest
         * @static
         * @param {tachyon.RegistrationRequest} message RegistrationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegistrationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.email = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this RegistrationRequest to JSON.
         * @function toJSON
         * @memberof tachyon.RegistrationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegistrationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegistrationRequest
         * @function getTypeUrl
         * @memberof tachyon.RegistrationRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegistrationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.RegistrationRequest";
        };

        return RegistrationRequest;
    })();

    tachyon.RegistrationResponse = (function() {

        /**
         * Properties of a RegistrationResponse.
         * @memberof tachyon
         * @interface IRegistrationResponse
         * @property {string|null} [token] RegistrationResponse token
         */

        /**
         * Constructs a new RegistrationResponse.
         * @memberof tachyon
         * @classdesc Represents a RegistrationResponse.
         * @implements IRegistrationResponse
         * @constructor
         * @param {tachyon.IRegistrationResponse=} [properties] Properties to set
         */
        function RegistrationResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegistrationResponse token.
         * @member {string} token
         * @memberof tachyon.RegistrationResponse
         * @instance
         */
        RegistrationResponse.prototype.token = "";

        /**
         * Creates a new RegistrationResponse instance using the specified properties.
         * @function create
         * @memberof tachyon.RegistrationResponse
         * @static
         * @param {tachyon.IRegistrationResponse=} [properties] Properties to set
         * @returns {tachyon.RegistrationResponse} RegistrationResponse instance
         */
        RegistrationResponse.create = function create(properties) {
            return new RegistrationResponse(properties);
        };

        /**
         * Encodes the specified RegistrationResponse message. Does not implicitly {@link tachyon.RegistrationResponse.verify|verify} messages.
         * @function encode
         * @memberof tachyon.RegistrationResponse
         * @static
         * @param {tachyon.IRegistrationResponse} message RegistrationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistrationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified RegistrationResponse message, length delimited. Does not implicitly {@link tachyon.RegistrationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.RegistrationResponse
         * @static
         * @param {tachyon.IRegistrationResponse} message RegistrationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistrationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegistrationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.RegistrationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.RegistrationResponse} RegistrationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistrationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.RegistrationResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegistrationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.RegistrationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.RegistrationResponse} RegistrationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistrationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegistrationResponse message.
         * @function verify
         * @memberof tachyon.RegistrationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegistrationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a RegistrationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.RegistrationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.RegistrationResponse} RegistrationResponse
         */
        RegistrationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.RegistrationResponse)
                return object;
            var message = new $root.tachyon.RegistrationResponse();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a RegistrationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.RegistrationResponse
         * @static
         * @param {tachyon.RegistrationResponse} message RegistrationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegistrationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this RegistrationResponse to JSON.
         * @function toJSON
         * @memberof tachyon.RegistrationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegistrationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RegistrationResponse
         * @function getTypeUrl
         * @memberof tachyon.RegistrationResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RegistrationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.RegistrationResponse";
        };

        return RegistrationResponse;
    })();

    tachyon.AccountMigrationRequest = (function() {

        /**
         * Properties of an AccountMigrationRequest.
         * @memberof tachyon
         * @interface IAccountMigrationRequest
         * @property {string|null} [username] AccountMigrationRequest username
         * @property {string|null} [password] AccountMigrationRequest password
         * @property {string|null} [desiredEmail] AccountMigrationRequest desiredEmail
         */

        /**
         * Constructs a new AccountMigrationRequest.
         * @memberof tachyon
         * @classdesc Represents an AccountMigrationRequest.
         * @implements IAccountMigrationRequest
         * @constructor
         * @param {tachyon.IAccountMigrationRequest=} [properties] Properties to set
         */
        function AccountMigrationRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountMigrationRequest username.
         * @member {string} username
         * @memberof tachyon.AccountMigrationRequest
         * @instance
         */
        AccountMigrationRequest.prototype.username = "";

        /**
         * AccountMigrationRequest password.
         * @member {string} password
         * @memberof tachyon.AccountMigrationRequest
         * @instance
         */
        AccountMigrationRequest.prototype.password = "";

        /**
         * AccountMigrationRequest desiredEmail.
         * @member {string} desiredEmail
         * @memberof tachyon.AccountMigrationRequest
         * @instance
         */
        AccountMigrationRequest.prototype.desiredEmail = "";

        /**
         * Creates a new AccountMigrationRequest instance using the specified properties.
         * @function create
         * @memberof tachyon.AccountMigrationRequest
         * @static
         * @param {tachyon.IAccountMigrationRequest=} [properties] Properties to set
         * @returns {tachyon.AccountMigrationRequest} AccountMigrationRequest instance
         */
        AccountMigrationRequest.create = function create(properties) {
            return new AccountMigrationRequest(properties);
        };

        /**
         * Encodes the specified AccountMigrationRequest message. Does not implicitly {@link tachyon.AccountMigrationRequest.verify|verify} messages.
         * @function encode
         * @memberof tachyon.AccountMigrationRequest
         * @static
         * @param {tachyon.IAccountMigrationRequest} message AccountMigrationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountMigrationRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.desiredEmail != null && Object.hasOwnProperty.call(message, "desiredEmail"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.desiredEmail);
            return writer;
        };

        /**
         * Encodes the specified AccountMigrationRequest message, length delimited. Does not implicitly {@link tachyon.AccountMigrationRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.AccountMigrationRequest
         * @static
         * @param {tachyon.IAccountMigrationRequest} message AccountMigrationRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountMigrationRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountMigrationRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.AccountMigrationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.AccountMigrationRequest} AccountMigrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountMigrationRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.AccountMigrationRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.username = reader.string();
                        break;
                    }
                case 2: {
                        message.password = reader.string();
                        break;
                    }
                case 3: {
                        message.desiredEmail = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountMigrationRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.AccountMigrationRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.AccountMigrationRequest} AccountMigrationRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountMigrationRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountMigrationRequest message.
         * @function verify
         * @memberof tachyon.AccountMigrationRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountMigrationRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.desiredEmail != null && message.hasOwnProperty("desiredEmail"))
                if (!$util.isString(message.desiredEmail))
                    return "desiredEmail: string expected";
            return null;
        };

        /**
         * Creates an AccountMigrationRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.AccountMigrationRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.AccountMigrationRequest} AccountMigrationRequest
         */
        AccountMigrationRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.AccountMigrationRequest)
                return object;
            var message = new $root.tachyon.AccountMigrationRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            if (object.desiredEmail != null)
                message.desiredEmail = String(object.desiredEmail);
            return message;
        };

        /**
         * Creates a plain object from an AccountMigrationRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.AccountMigrationRequest
         * @static
         * @param {tachyon.AccountMigrationRequest} message AccountMigrationRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountMigrationRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
                object.desiredEmail = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.desiredEmail != null && message.hasOwnProperty("desiredEmail"))
                object.desiredEmail = message.desiredEmail;
            return object;
        };

        /**
         * Converts this AccountMigrationRequest to JSON.
         * @function toJSON
         * @memberof tachyon.AccountMigrationRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountMigrationRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountMigrationRequest
         * @function getTypeUrl
         * @memberof tachyon.AccountMigrationRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountMigrationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.AccountMigrationRequest";
        };

        return AccountMigrationRequest;
    })();

    tachyon.AccountMigrationResponse = (function() {

        /**
         * Properties of an AccountMigrationResponse.
         * @memberof tachyon
         * @interface IAccountMigrationResponse
         * @property {string|null} [token] AccountMigrationResponse token
         */

        /**
         * Constructs a new AccountMigrationResponse.
         * @memberof tachyon
         * @classdesc Represents an AccountMigrationResponse.
         * @implements IAccountMigrationResponse
         * @constructor
         * @param {tachyon.IAccountMigrationResponse=} [properties] Properties to set
         */
        function AccountMigrationResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountMigrationResponse token.
         * @member {string} token
         * @memberof tachyon.AccountMigrationResponse
         * @instance
         */
        AccountMigrationResponse.prototype.token = "";

        /**
         * Creates a new AccountMigrationResponse instance using the specified properties.
         * @function create
         * @memberof tachyon.AccountMigrationResponse
         * @static
         * @param {tachyon.IAccountMigrationResponse=} [properties] Properties to set
         * @returns {tachyon.AccountMigrationResponse} AccountMigrationResponse instance
         */
        AccountMigrationResponse.create = function create(properties) {
            return new AccountMigrationResponse(properties);
        };

        /**
         * Encodes the specified AccountMigrationResponse message. Does not implicitly {@link tachyon.AccountMigrationResponse.verify|verify} messages.
         * @function encode
         * @memberof tachyon.AccountMigrationResponse
         * @static
         * @param {tachyon.IAccountMigrationResponse} message AccountMigrationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountMigrationResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified AccountMigrationResponse message, length delimited. Does not implicitly {@link tachyon.AccountMigrationResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.AccountMigrationResponse
         * @static
         * @param {tachyon.IAccountMigrationResponse} message AccountMigrationResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountMigrationResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountMigrationResponse message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.AccountMigrationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.AccountMigrationResponse} AccountMigrationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountMigrationResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.AccountMigrationResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountMigrationResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.AccountMigrationResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.AccountMigrationResponse} AccountMigrationResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountMigrationResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountMigrationResponse message.
         * @function verify
         * @memberof tachyon.AccountMigrationResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountMigrationResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates an AccountMigrationResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.AccountMigrationResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.AccountMigrationResponse} AccountMigrationResponse
         */
        AccountMigrationResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.AccountMigrationResponse)
                return object;
            var message = new $root.tachyon.AccountMigrationResponse();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from an AccountMigrationResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.AccountMigrationResponse
         * @static
         * @param {tachyon.AccountMigrationResponse} message AccountMigrationResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountMigrationResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this AccountMigrationResponse to JSON.
         * @function toJSON
         * @memberof tachyon.AccountMigrationResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountMigrationResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AccountMigrationResponse
         * @function getTypeUrl
         * @memberof tachyon.AccountMigrationResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AccountMigrationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.AccountMigrationResponse";
        };

        return AccountMigrationResponse;
    })();

    tachyon.User = (function() {

        /**
         * Properties of a User.
         * @memberof tachyon
         * @interface IUser
         * @property {number|null} [id] User id
         * @property {string|null} [name] User name
         * @property {boolean|null} [bot] User bot
         * @property {number|null} [clanId] User clanId
         * @property {Object.<string,string>|null} [icons] User icons
         */

        /**
         * Constructs a new User.
         * @memberof tachyon
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {tachyon.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.icons = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {number} id
         * @memberof tachyon.User
         * @instance
         */
        User.prototype.id = 0;

        /**
         * User name.
         * @member {string} name
         * @memberof tachyon.User
         * @instance
         */
        User.prototype.name = "";

        /**
         * User bot.
         * @member {boolean} bot
         * @memberof tachyon.User
         * @instance
         */
        User.prototype.bot = false;

        /**
         * User clanId.
         * @member {number} clanId
         * @memberof tachyon.User
         * @instance
         */
        User.prototype.clanId = 0;

        /**
         * User icons.
         * @member {Object.<string,string>} icons
         * @memberof tachyon.User
         * @instance
         */
        User.prototype.icons = $util.emptyObject;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof tachyon.User
         * @static
         * @param {tachyon.IUser=} [properties] Properties to set
         * @returns {tachyon.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link tachyon.User.verify|verify} messages.
         * @function encode
         * @memberof tachyon.User
         * @static
         * @param {tachyon.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.bot != null && Object.hasOwnProperty.call(message, "bot"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.bot);
            if (message.clanId != null && Object.hasOwnProperty.call(message, "clanId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.clanId);
            if (message.icons != null && Object.hasOwnProperty.call(message, "icons"))
                for (var keys = Object.keys(message.icons), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.icons[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link tachyon.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.User
         * @static
         * @param {tachyon.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.User(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.bot = reader.bool();
                        break;
                    }
                case 4: {
                        message.clanId = reader.int32();
                        break;
                    }
                case 5: {
                        if (message.icons === $util.emptyObject)
                            message.icons = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.icons[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof tachyon.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.bot != null && message.hasOwnProperty("bot"))
                if (typeof message.bot !== "boolean")
                    return "bot: boolean expected";
            if (message.clanId != null && message.hasOwnProperty("clanId"))
                if (!$util.isInteger(message.clanId))
                    return "clanId: integer expected";
            if (message.icons != null && message.hasOwnProperty("icons")) {
                if (!$util.isObject(message.icons))
                    return "icons: object expected";
                var key = Object.keys(message.icons);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.icons[key[i]]))
                        return "icons: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.User)
                return object;
            var message = new $root.tachyon.User();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.bot != null)
                message.bot = Boolean(object.bot);
            if (object.clanId != null)
                message.clanId = object.clanId | 0;
            if (object.icons) {
                if (typeof object.icons !== "object")
                    throw TypeError(".tachyon.User.icons: object expected");
                message.icons = {};
                for (var keys = Object.keys(object.icons), i = 0; i < keys.length; ++i)
                    message.icons[keys[i]] = String(object.icons[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.User
         * @static
         * @param {tachyon.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.icons = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.bot = false;
                object.clanId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.bot != null && message.hasOwnProperty("bot"))
                object.bot = message.bot;
            if (message.clanId != null && message.hasOwnProperty("clanId"))
                object.clanId = message.clanId;
            var keys2;
            if (message.icons && (keys2 = Object.keys(message.icons)).length) {
                object.icons = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.icons[keys2[j]] = message.icons[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof tachyon.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof tachyon.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.User";
        };

        return User;
    })();

    tachyon.PrivateUser = (function() {

        /**
         * Properties of a PrivateUser.
         * @memberof tachyon
         * @interface IPrivateUser
         * @property {number|null} [id] PrivateUser id
         * @property {string|null} [name] PrivateUser name
         * @property {boolean|null} [bot] PrivateUser bot
         * @property {number|null} [clanId] PrivateUser clanId
         * @property {Object.<string,string>|null} [icons] PrivateUser icons
         * @property {Array.<string>|null} [permissions] PrivateUser permissions
         * @property {Array.<number>|null} [friends] PrivateUser friends
         * @property {Array.<number>|null} [friendRequests] PrivateUser friendRequests
         * @property {Array.<number>|null} [ignores] PrivateUser ignores
         */

        /**
         * Constructs a new PrivateUser.
         * @memberof tachyon
         * @classdesc Represents a PrivateUser.
         * @implements IPrivateUser
         * @constructor
         * @param {tachyon.IPrivateUser=} [properties] Properties to set
         */
        function PrivateUser(properties) {
            this.icons = {};
            this.permissions = [];
            this.friends = [];
            this.friendRequests = [];
            this.ignores = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivateUser id.
         * @member {number} id
         * @memberof tachyon.PrivateUser
         * @instance
         */
        PrivateUser.prototype.id = 0;

        /**
         * PrivateUser name.
         * @member {string} name
         * @memberof tachyon.PrivateUser
         * @instance
         */
        PrivateUser.prototype.name = "";

        /**
         * PrivateUser bot.
         * @member {boolean} bot
         * @memberof tachyon.PrivateUser
         * @instance
         */
        PrivateUser.prototype.bot = false;

        /**
         * PrivateUser clanId.
         * @member {number} clanId
         * @memberof tachyon.PrivateUser
         * @instance
         */
        PrivateUser.prototype.clanId = 0;

        /**
         * PrivateUser icons.
         * @member {Object.<string,string>} icons
         * @memberof tachyon.PrivateUser
         * @instance
         */
        PrivateUser.prototype.icons = $util.emptyObject;

        /**
         * PrivateUser permissions.
         * @member {Array.<string>} permissions
         * @memberof tachyon.PrivateUser
         * @instance
         */
        PrivateUser.prototype.permissions = $util.emptyArray;

        /**
         * PrivateUser friends.
         * @member {Array.<number>} friends
         * @memberof tachyon.PrivateUser
         * @instance
         */
        PrivateUser.prototype.friends = $util.emptyArray;

        /**
         * PrivateUser friendRequests.
         * @member {Array.<number>} friendRequests
         * @memberof tachyon.PrivateUser
         * @instance
         */
        PrivateUser.prototype.friendRequests = $util.emptyArray;

        /**
         * PrivateUser ignores.
         * @member {Array.<number>} ignores
         * @memberof tachyon.PrivateUser
         * @instance
         */
        PrivateUser.prototype.ignores = $util.emptyArray;

        /**
         * Creates a new PrivateUser instance using the specified properties.
         * @function create
         * @memberof tachyon.PrivateUser
         * @static
         * @param {tachyon.IPrivateUser=} [properties] Properties to set
         * @returns {tachyon.PrivateUser} PrivateUser instance
         */
        PrivateUser.create = function create(properties) {
            return new PrivateUser(properties);
        };

        /**
         * Encodes the specified PrivateUser message. Does not implicitly {@link tachyon.PrivateUser.verify|verify} messages.
         * @function encode
         * @memberof tachyon.PrivateUser
         * @static
         * @param {tachyon.IPrivateUser} message PrivateUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.bot != null && Object.hasOwnProperty.call(message, "bot"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.bot);
            if (message.clanId != null && Object.hasOwnProperty.call(message, "clanId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.clanId);
            if (message.icons != null && Object.hasOwnProperty.call(message, "icons"))
                for (var keys = Object.keys(message.icons), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.icons[keys[i]]).ldelim();
            if (message.permissions != null && message.permissions.length)
                for (var i = 0; i < message.permissions.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.permissions[i]);
            if (message.friends != null && message.friends.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
                for (var i = 0; i < message.friends.length; ++i)
                    writer.int32(message.friends[i]);
                writer.ldelim();
            }
            if (message.friendRequests != null && message.friendRequests.length) {
                writer.uint32(/* id 11, wireType 2 =*/90).fork();
                for (var i = 0; i < message.friendRequests.length; ++i)
                    writer.int32(message.friendRequests[i]);
                writer.ldelim();
            }
            if (message.ignores != null && message.ignores.length) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork();
                for (var i = 0; i < message.ignores.length; ++i)
                    writer.int32(message.ignores[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified PrivateUser message, length delimited. Does not implicitly {@link tachyon.PrivateUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.PrivateUser
         * @static
         * @param {tachyon.IPrivateUser} message PrivateUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivateUser message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.PrivateUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.PrivateUser} PrivateUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.PrivateUser(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.bot = reader.bool();
                        break;
                    }
                case 4: {
                        message.clanId = reader.int32();
                        break;
                    }
                case 5: {
                        if (message.icons === $util.emptyObject)
                            message.icons = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.icons[key] = value;
                        break;
                    }
                case 9: {
                        if (!(message.permissions && message.permissions.length))
                            message.permissions = [];
                        message.permissions.push(reader.string());
                        break;
                    }
                case 10: {
                        if (!(message.friends && message.friends.length))
                            message.friends = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.friends.push(reader.int32());
                        } else
                            message.friends.push(reader.int32());
                        break;
                    }
                case 11: {
                        if (!(message.friendRequests && message.friendRequests.length))
                            message.friendRequests = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.friendRequests.push(reader.int32());
                        } else
                            message.friendRequests.push(reader.int32());
                        break;
                    }
                case 12: {
                        if (!(message.ignores && message.ignores.length))
                            message.ignores = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.ignores.push(reader.int32());
                        } else
                            message.ignores.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivateUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.PrivateUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.PrivateUser} PrivateUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrivateUser message.
         * @function verify
         * @memberof tachyon.PrivateUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrivateUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.bot != null && message.hasOwnProperty("bot"))
                if (typeof message.bot !== "boolean")
                    return "bot: boolean expected";
            if (message.clanId != null && message.hasOwnProperty("clanId"))
                if (!$util.isInteger(message.clanId))
                    return "clanId: integer expected";
            if (message.icons != null && message.hasOwnProperty("icons")) {
                if (!$util.isObject(message.icons))
                    return "icons: object expected";
                var key = Object.keys(message.icons);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.icons[key[i]]))
                        return "icons: string{k:string} expected";
            }
            if (message.permissions != null && message.hasOwnProperty("permissions")) {
                if (!Array.isArray(message.permissions))
                    return "permissions: array expected";
                for (var i = 0; i < message.permissions.length; ++i)
                    if (!$util.isString(message.permissions[i]))
                        return "permissions: string[] expected";
            }
            if (message.friends != null && message.hasOwnProperty("friends")) {
                if (!Array.isArray(message.friends))
                    return "friends: array expected";
                for (var i = 0; i < message.friends.length; ++i)
                    if (!$util.isInteger(message.friends[i]))
                        return "friends: integer[] expected";
            }
            if (message.friendRequests != null && message.hasOwnProperty("friendRequests")) {
                if (!Array.isArray(message.friendRequests))
                    return "friendRequests: array expected";
                for (var i = 0; i < message.friendRequests.length; ++i)
                    if (!$util.isInteger(message.friendRequests[i]))
                        return "friendRequests: integer[] expected";
            }
            if (message.ignores != null && message.hasOwnProperty("ignores")) {
                if (!Array.isArray(message.ignores))
                    return "ignores: array expected";
                for (var i = 0; i < message.ignores.length; ++i)
                    if (!$util.isInteger(message.ignores[i]))
                        return "ignores: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a PrivateUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.PrivateUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.PrivateUser} PrivateUser
         */
        PrivateUser.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.PrivateUser)
                return object;
            var message = new $root.tachyon.PrivateUser();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.bot != null)
                message.bot = Boolean(object.bot);
            if (object.clanId != null)
                message.clanId = object.clanId | 0;
            if (object.icons) {
                if (typeof object.icons !== "object")
                    throw TypeError(".tachyon.PrivateUser.icons: object expected");
                message.icons = {};
                for (var keys = Object.keys(object.icons), i = 0; i < keys.length; ++i)
                    message.icons[keys[i]] = String(object.icons[keys[i]]);
            }
            if (object.permissions) {
                if (!Array.isArray(object.permissions))
                    throw TypeError(".tachyon.PrivateUser.permissions: array expected");
                message.permissions = [];
                for (var i = 0; i < object.permissions.length; ++i)
                    message.permissions[i] = String(object.permissions[i]);
            }
            if (object.friends) {
                if (!Array.isArray(object.friends))
                    throw TypeError(".tachyon.PrivateUser.friends: array expected");
                message.friends = [];
                for (var i = 0; i < object.friends.length; ++i)
                    message.friends[i] = object.friends[i] | 0;
            }
            if (object.friendRequests) {
                if (!Array.isArray(object.friendRequests))
                    throw TypeError(".tachyon.PrivateUser.friendRequests: array expected");
                message.friendRequests = [];
                for (var i = 0; i < object.friendRequests.length; ++i)
                    message.friendRequests[i] = object.friendRequests[i] | 0;
            }
            if (object.ignores) {
                if (!Array.isArray(object.ignores))
                    throw TypeError(".tachyon.PrivateUser.ignores: array expected");
                message.ignores = [];
                for (var i = 0; i < object.ignores.length; ++i)
                    message.ignores[i] = object.ignores[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a PrivateUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.PrivateUser
         * @static
         * @param {tachyon.PrivateUser} message PrivateUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrivateUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.permissions = [];
                object.friends = [];
                object.friendRequests = [];
                object.ignores = [];
            }
            if (options.objects || options.defaults)
                object.icons = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.bot = false;
                object.clanId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.bot != null && message.hasOwnProperty("bot"))
                object.bot = message.bot;
            if (message.clanId != null && message.hasOwnProperty("clanId"))
                object.clanId = message.clanId;
            var keys2;
            if (message.icons && (keys2 = Object.keys(message.icons)).length) {
                object.icons = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.icons[keys2[j]] = message.icons[keys2[j]];
            }
            if (message.permissions && message.permissions.length) {
                object.permissions = [];
                for (var j = 0; j < message.permissions.length; ++j)
                    object.permissions[j] = message.permissions[j];
            }
            if (message.friends && message.friends.length) {
                object.friends = [];
                for (var j = 0; j < message.friends.length; ++j)
                    object.friends[j] = message.friends[j];
            }
            if (message.friendRequests && message.friendRequests.length) {
                object.friendRequests = [];
                for (var j = 0; j < message.friendRequests.length; ++j)
                    object.friendRequests[j] = message.friendRequests[j];
            }
            if (message.ignores && message.ignores.length) {
                object.ignores = [];
                for (var j = 0; j < message.ignores.length; ++j)
                    object.ignores[j] = message.ignores[j];
            }
            return object;
        };

        /**
         * Converts this PrivateUser to JSON.
         * @function toJSON
         * @memberof tachyon.PrivateUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrivateUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PrivateUser
         * @function getTypeUrl
         * @memberof tachyon.PrivateUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrivateUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.PrivateUser";
        };

        return PrivateUser;
    })();

    tachyon.MyselfRequest = (function() {

        /**
         * Properties of a MyselfRequest.
         * @memberof tachyon
         * @interface IMyselfRequest
         */

        /**
         * Constructs a new MyselfRequest.
         * @memberof tachyon
         * @classdesc Represents a MyselfRequest.
         * @implements IMyselfRequest
         * @constructor
         * @param {tachyon.IMyselfRequest=} [properties] Properties to set
         */
        function MyselfRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MyselfRequest instance using the specified properties.
         * @function create
         * @memberof tachyon.MyselfRequest
         * @static
         * @param {tachyon.IMyselfRequest=} [properties] Properties to set
         * @returns {tachyon.MyselfRequest} MyselfRequest instance
         */
        MyselfRequest.create = function create(properties) {
            return new MyselfRequest(properties);
        };

        /**
         * Encodes the specified MyselfRequest message. Does not implicitly {@link tachyon.MyselfRequest.verify|verify} messages.
         * @function encode
         * @memberof tachyon.MyselfRequest
         * @static
         * @param {tachyon.IMyselfRequest} message MyselfRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MyselfRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MyselfRequest message, length delimited. Does not implicitly {@link tachyon.MyselfRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.MyselfRequest
         * @static
         * @param {tachyon.IMyselfRequest} message MyselfRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MyselfRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MyselfRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.MyselfRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.MyselfRequest} MyselfRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MyselfRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.MyselfRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MyselfRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.MyselfRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.MyselfRequest} MyselfRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MyselfRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MyselfRequest message.
         * @function verify
         * @memberof tachyon.MyselfRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MyselfRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MyselfRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.MyselfRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.MyselfRequest} MyselfRequest
         */
        MyselfRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.MyselfRequest)
                return object;
            return new $root.tachyon.MyselfRequest();
        };

        /**
         * Creates a plain object from a MyselfRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.MyselfRequest
         * @static
         * @param {tachyon.MyselfRequest} message MyselfRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MyselfRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MyselfRequest to JSON.
         * @function toJSON
         * @memberof tachyon.MyselfRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MyselfRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MyselfRequest
         * @function getTypeUrl
         * @memberof tachyon.MyselfRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MyselfRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.MyselfRequest";
        };

        return MyselfRequest;
    })();

    tachyon.MyselfResponse = (function() {

        /**
         * Properties of a MyselfResponse.
         * @memberof tachyon
         * @interface IMyselfResponse
         * @property {tachyon.IPrivateUser|null} [user] MyselfResponse user
         */

        /**
         * Constructs a new MyselfResponse.
         * @memberof tachyon
         * @classdesc Represents a MyselfResponse.
         * @implements IMyselfResponse
         * @constructor
         * @param {tachyon.IMyselfResponse=} [properties] Properties to set
         */
        function MyselfResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MyselfResponse user.
         * @member {tachyon.IPrivateUser|null|undefined} user
         * @memberof tachyon.MyselfResponse
         * @instance
         */
        MyselfResponse.prototype.user = null;

        /**
         * Creates a new MyselfResponse instance using the specified properties.
         * @function create
         * @memberof tachyon.MyselfResponse
         * @static
         * @param {tachyon.IMyselfResponse=} [properties] Properties to set
         * @returns {tachyon.MyselfResponse} MyselfResponse instance
         */
        MyselfResponse.create = function create(properties) {
            return new MyselfResponse(properties);
        };

        /**
         * Encodes the specified MyselfResponse message. Does not implicitly {@link tachyon.MyselfResponse.verify|verify} messages.
         * @function encode
         * @memberof tachyon.MyselfResponse
         * @static
         * @param {tachyon.IMyselfResponse} message MyselfResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MyselfResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.tachyon.PrivateUser.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MyselfResponse message, length delimited. Does not implicitly {@link tachyon.MyselfResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.MyselfResponse
         * @static
         * @param {tachyon.IMyselfResponse} message MyselfResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MyselfResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MyselfResponse message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.MyselfResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.MyselfResponse} MyselfResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MyselfResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.MyselfResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.user = $root.tachyon.PrivateUser.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MyselfResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.MyselfResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.MyselfResponse} MyselfResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MyselfResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MyselfResponse message.
         * @function verify
         * @memberof tachyon.MyselfResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MyselfResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.tachyon.PrivateUser.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a MyselfResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.MyselfResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.MyselfResponse} MyselfResponse
         */
        MyselfResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.MyselfResponse)
                return object;
            var message = new $root.tachyon.MyselfResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".tachyon.MyselfResponse.user: object expected");
                message.user = $root.tachyon.PrivateUser.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a MyselfResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.MyselfResponse
         * @static
         * @param {tachyon.MyselfResponse} message MyselfResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MyselfResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.tachyon.PrivateUser.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this MyselfResponse to JSON.
         * @function toJSON
         * @memberof tachyon.MyselfResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MyselfResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MyselfResponse
         * @function getTypeUrl
         * @memberof tachyon.MyselfResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MyselfResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.MyselfResponse";
        };

        return MyselfResponse;
    })();

    tachyon.UserListRequest = (function() {

        /**
         * Properties of a UserListRequest.
         * @memberof tachyon
         * @interface IUserListRequest
         * @property {Array.<number>|null} [idList] UserListRequest idList
         */

        /**
         * Constructs a new UserListRequest.
         * @memberof tachyon
         * @classdesc Represents a UserListRequest.
         * @implements IUserListRequest
         * @constructor
         * @param {tachyon.IUserListRequest=} [properties] Properties to set
         */
        function UserListRequest(properties) {
            this.idList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserListRequest idList.
         * @member {Array.<number>} idList
         * @memberof tachyon.UserListRequest
         * @instance
         */
        UserListRequest.prototype.idList = $util.emptyArray;

        /**
         * Creates a new UserListRequest instance using the specified properties.
         * @function create
         * @memberof tachyon.UserListRequest
         * @static
         * @param {tachyon.IUserListRequest=} [properties] Properties to set
         * @returns {tachyon.UserListRequest} UserListRequest instance
         */
        UserListRequest.create = function create(properties) {
            return new UserListRequest(properties);
        };

        /**
         * Encodes the specified UserListRequest message. Does not implicitly {@link tachyon.UserListRequest.verify|verify} messages.
         * @function encode
         * @memberof tachyon.UserListRequest
         * @static
         * @param {tachyon.IUserListRequest} message UserListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idList != null && message.idList.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.idList.length; ++i)
                    writer.int32(message.idList[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified UserListRequest message, length delimited. Does not implicitly {@link tachyon.UserListRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.UserListRequest
         * @static
         * @param {tachyon.IUserListRequest} message UserListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserListRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.UserListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.UserListRequest} UserListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.UserListRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.idList && message.idList.length))
                            message.idList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.idList.push(reader.int32());
                        } else
                            message.idList.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserListRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.UserListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.UserListRequest} UserListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserListRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserListRequest message.
         * @function verify
         * @memberof tachyon.UserListRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserListRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idList != null && message.hasOwnProperty("idList")) {
                if (!Array.isArray(message.idList))
                    return "idList: array expected";
                for (var i = 0; i < message.idList.length; ++i)
                    if (!$util.isInteger(message.idList[i]))
                        return "idList: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a UserListRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.UserListRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.UserListRequest} UserListRequest
         */
        UserListRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.UserListRequest)
                return object;
            var message = new $root.tachyon.UserListRequest();
            if (object.idList) {
                if (!Array.isArray(object.idList))
                    throw TypeError(".tachyon.UserListRequest.idList: array expected");
                message.idList = [];
                for (var i = 0; i < object.idList.length; ++i)
                    message.idList[i] = object.idList[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a UserListRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.UserListRequest
         * @static
         * @param {tachyon.UserListRequest} message UserListRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserListRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.idList = [];
            if (message.idList && message.idList.length) {
                object.idList = [];
                for (var j = 0; j < message.idList.length; ++j)
                    object.idList[j] = message.idList[j];
            }
            return object;
        };

        /**
         * Converts this UserListRequest to JSON.
         * @function toJSON
         * @memberof tachyon.UserListRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserListRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserListRequest
         * @function getTypeUrl
         * @memberof tachyon.UserListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.UserListRequest";
        };

        return UserListRequest;
    })();

    tachyon.UserListResponse = (function() {

        /**
         * Properties of a UserListResponse.
         * @memberof tachyon
         * @interface IUserListResponse
         * @property {Array.<tachyon.IUser>|null} [userList] UserListResponse userList
         */

        /**
         * Constructs a new UserListResponse.
         * @memberof tachyon
         * @classdesc Represents a UserListResponse.
         * @implements IUserListResponse
         * @constructor
         * @param {tachyon.IUserListResponse=} [properties] Properties to set
         */
        function UserListResponse(properties) {
            this.userList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserListResponse userList.
         * @member {Array.<tachyon.IUser>} userList
         * @memberof tachyon.UserListResponse
         * @instance
         */
        UserListResponse.prototype.userList = $util.emptyArray;

        /**
         * Creates a new UserListResponse instance using the specified properties.
         * @function create
         * @memberof tachyon.UserListResponse
         * @static
         * @param {tachyon.IUserListResponse=} [properties] Properties to set
         * @returns {tachyon.UserListResponse} UserListResponse instance
         */
        UserListResponse.create = function create(properties) {
            return new UserListResponse(properties);
        };

        /**
         * Encodes the specified UserListResponse message. Does not implicitly {@link tachyon.UserListResponse.verify|verify} messages.
         * @function encode
         * @memberof tachyon.UserListResponse
         * @static
         * @param {tachyon.IUserListResponse} message UserListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userList != null && message.userList.length)
                for (var i = 0; i < message.userList.length; ++i)
                    $root.tachyon.User.encode(message.userList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserListResponse message, length delimited. Does not implicitly {@link tachyon.UserListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.UserListResponse
         * @static
         * @param {tachyon.IUserListResponse} message UserListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.UserListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.UserListResponse} UserListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.UserListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.userList && message.userList.length))
                            message.userList = [];
                        message.userList.push($root.tachyon.User.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.UserListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.UserListResponse} UserListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserListResponse message.
         * @function verify
         * @memberof tachyon.UserListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userList != null && message.hasOwnProperty("userList")) {
                if (!Array.isArray(message.userList))
                    return "userList: array expected";
                for (var i = 0; i < message.userList.length; ++i) {
                    var error = $root.tachyon.User.verify(message.userList[i]);
                    if (error)
                        return "userList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.UserListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.UserListResponse} UserListResponse
         */
        UserListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.UserListResponse)
                return object;
            var message = new $root.tachyon.UserListResponse();
            if (object.userList) {
                if (!Array.isArray(object.userList))
                    throw TypeError(".tachyon.UserListResponse.userList: array expected");
                message.userList = [];
                for (var i = 0; i < object.userList.length; ++i) {
                    if (typeof object.userList[i] !== "object")
                        throw TypeError(".tachyon.UserListResponse.userList: object expected");
                    message.userList[i] = $root.tachyon.User.fromObject(object.userList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.UserListResponse
         * @static
         * @param {tachyon.UserListResponse} message UserListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userList = [];
            if (message.userList && message.userList.length) {
                object.userList = [];
                for (var j = 0; j < message.userList.length; ++j)
                    object.userList[j] = $root.tachyon.User.toObject(message.userList[j], options);
            }
            return object;
        };

        /**
         * Converts this UserListResponse to JSON.
         * @function toJSON
         * @memberof tachyon.UserListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserListResponse
         * @function getTypeUrl
         * @memberof tachyon.UserListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.UserListResponse";
        };

        return UserListResponse;
    })();

    tachyon.LobbyListRequest = (function() {

        /**
         * Properties of a LobbyListRequest.
         * @memberof tachyon
         * @interface ILobbyListRequest
         * @property {Array.<number>|null} [idList] LobbyListRequest idList
         * @property {tachyon.LobbyStatus|null} [locked] LobbyListRequest locked
         * @property {boolean|null} [passworded] LobbyListRequest passworded
         */

        /**
         * Constructs a new LobbyListRequest.
         * @memberof tachyon
         * @classdesc Represents a LobbyListRequest.
         * @implements ILobbyListRequest
         * @constructor
         * @param {tachyon.ILobbyListRequest=} [properties] Properties to set
         */
        function LobbyListRequest(properties) {
            this.idList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyListRequest idList.
         * @member {Array.<number>} idList
         * @memberof tachyon.LobbyListRequest
         * @instance
         */
        LobbyListRequest.prototype.idList = $util.emptyArray;

        /**
         * LobbyListRequest locked.
         * @member {tachyon.LobbyStatus} locked
         * @memberof tachyon.LobbyListRequest
         * @instance
         */
        LobbyListRequest.prototype.locked = 0;

        /**
         * LobbyListRequest passworded.
         * @member {boolean} passworded
         * @memberof tachyon.LobbyListRequest
         * @instance
         */
        LobbyListRequest.prototype.passworded = false;

        /**
         * Creates a new LobbyListRequest instance using the specified properties.
         * @function create
         * @memberof tachyon.LobbyListRequest
         * @static
         * @param {tachyon.ILobbyListRequest=} [properties] Properties to set
         * @returns {tachyon.LobbyListRequest} LobbyListRequest instance
         */
        LobbyListRequest.create = function create(properties) {
            return new LobbyListRequest(properties);
        };

        /**
         * Encodes the specified LobbyListRequest message. Does not implicitly {@link tachyon.LobbyListRequest.verify|verify} messages.
         * @function encode
         * @memberof tachyon.LobbyListRequest
         * @static
         * @param {tachyon.ILobbyListRequest} message LobbyListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.idList != null && message.idList.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.idList.length; ++i)
                    writer.int32(message.idList[i]);
                writer.ldelim();
            }
            if (message.locked != null && Object.hasOwnProperty.call(message, "locked"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.locked);
            if (message.passworded != null && Object.hasOwnProperty.call(message, "passworded"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.passworded);
            return writer;
        };

        /**
         * Encodes the specified LobbyListRequest message, length delimited. Does not implicitly {@link tachyon.LobbyListRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.LobbyListRequest
         * @static
         * @param {tachyon.ILobbyListRequest} message LobbyListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyListRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.LobbyListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.LobbyListRequest} LobbyListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.LobbyListRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.idList && message.idList.length))
                            message.idList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.idList.push(reader.int32());
                        } else
                            message.idList.push(reader.int32());
                        break;
                    }
                case 2: {
                        message.locked = reader.int32();
                        break;
                    }
                case 3: {
                        message.passworded = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LobbyListRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.LobbyListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.LobbyListRequest} LobbyListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyListRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyListRequest message.
         * @function verify
         * @memberof tachyon.LobbyListRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyListRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idList != null && message.hasOwnProperty("idList")) {
                if (!Array.isArray(message.idList))
                    return "idList: array expected";
                for (var i = 0; i < message.idList.length; ++i)
                    if (!$util.isInteger(message.idList[i]))
                        return "idList: integer[] expected";
            }
            if (message.locked != null && message.hasOwnProperty("locked"))
                switch (message.locked) {
                default:
                    return "locked: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.passworded != null && message.hasOwnProperty("passworded"))
                if (typeof message.passworded !== "boolean")
                    return "passworded: boolean expected";
            return null;
        };

        /**
         * Creates a LobbyListRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.LobbyListRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.LobbyListRequest} LobbyListRequest
         */
        LobbyListRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.LobbyListRequest)
                return object;
            var message = new $root.tachyon.LobbyListRequest();
            if (object.idList) {
                if (!Array.isArray(object.idList))
                    throw TypeError(".tachyon.LobbyListRequest.idList: array expected");
                message.idList = [];
                for (var i = 0; i < object.idList.length; ++i)
                    message.idList[i] = object.idList[i] | 0;
            }
            switch (object.locked) {
            default:
                if (typeof object.locked === "number") {
                    message.locked = object.locked;
                    break;
                }
                break;
            case "LOBBY_UNLOCKED":
            case 0:
                message.locked = 0;
                break;
            case "LOBBY_FRIENDS":
            case 1:
                message.locked = 1;
                break;
            case "LOBBY_WHITELIST":
            case 2:
                message.locked = 2;
                break;
            case "LOBBY_LOCKED":
            case 3:
                message.locked = 3;
                break;
            }
            if (object.passworded != null)
                message.passworded = Boolean(object.passworded);
            return message;
        };

        /**
         * Creates a plain object from a LobbyListRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.LobbyListRequest
         * @static
         * @param {tachyon.LobbyListRequest} message LobbyListRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyListRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.idList = [];
            if (options.defaults) {
                object.locked = options.enums === String ? "LOBBY_UNLOCKED" : 0;
                object.passworded = false;
            }
            if (message.idList && message.idList.length) {
                object.idList = [];
                for (var j = 0; j < message.idList.length; ++j)
                    object.idList[j] = message.idList[j];
            }
            if (message.locked != null && message.hasOwnProperty("locked"))
                object.locked = options.enums === String ? $root.tachyon.LobbyStatus[message.locked] === undefined ? message.locked : $root.tachyon.LobbyStatus[message.locked] : message.locked;
            if (message.passworded != null && message.hasOwnProperty("passworded"))
                object.passworded = message.passworded;
            return object;
        };

        /**
         * Converts this LobbyListRequest to JSON.
         * @function toJSON
         * @memberof tachyon.LobbyListRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyListRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LobbyListRequest
         * @function getTypeUrl
         * @memberof tachyon.LobbyListRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LobbyListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.LobbyListRequest";
        };

        return LobbyListRequest;
    })();

    tachyon.LobbyListResponse = (function() {

        /**
         * Properties of a LobbyListResponse.
         * @memberof tachyon
         * @interface ILobbyListResponse
         * @property {Array.<tachyon.ILobby>|null} [lobbyList] LobbyListResponse lobbyList
         */

        /**
         * Constructs a new LobbyListResponse.
         * @memberof tachyon
         * @classdesc Represents a LobbyListResponse.
         * @implements ILobbyListResponse
         * @constructor
         * @param {tachyon.ILobbyListResponse=} [properties] Properties to set
         */
        function LobbyListResponse(properties) {
            this.lobbyList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyListResponse lobbyList.
         * @member {Array.<tachyon.ILobby>} lobbyList
         * @memberof tachyon.LobbyListResponse
         * @instance
         */
        LobbyListResponse.prototype.lobbyList = $util.emptyArray;

        /**
         * Creates a new LobbyListResponse instance using the specified properties.
         * @function create
         * @memberof tachyon.LobbyListResponse
         * @static
         * @param {tachyon.ILobbyListResponse=} [properties] Properties to set
         * @returns {tachyon.LobbyListResponse} LobbyListResponse instance
         */
        LobbyListResponse.create = function create(properties) {
            return new LobbyListResponse(properties);
        };

        /**
         * Encodes the specified LobbyListResponse message. Does not implicitly {@link tachyon.LobbyListResponse.verify|verify} messages.
         * @function encode
         * @memberof tachyon.LobbyListResponse
         * @static
         * @param {tachyon.ILobbyListResponse} message LobbyListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lobbyList != null && message.lobbyList.length)
                for (var i = 0; i < message.lobbyList.length; ++i)
                    $root.tachyon.Lobby.encode(message.lobbyList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LobbyListResponse message, length delimited. Does not implicitly {@link tachyon.LobbyListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.LobbyListResponse
         * @static
         * @param {tachyon.ILobbyListResponse} message LobbyListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.LobbyListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.LobbyListResponse} LobbyListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.LobbyListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.lobbyList && message.lobbyList.length))
                            message.lobbyList = [];
                        message.lobbyList.push($root.tachyon.Lobby.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LobbyListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.LobbyListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.LobbyListResponse} LobbyListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyListResponse message.
         * @function verify
         * @memberof tachyon.LobbyListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lobbyList != null && message.hasOwnProperty("lobbyList")) {
                if (!Array.isArray(message.lobbyList))
                    return "lobbyList: array expected";
                for (var i = 0; i < message.lobbyList.length; ++i) {
                    var error = $root.tachyon.Lobby.verify(message.lobbyList[i]);
                    if (error)
                        return "lobbyList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LobbyListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.LobbyListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.LobbyListResponse} LobbyListResponse
         */
        LobbyListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.LobbyListResponse)
                return object;
            var message = new $root.tachyon.LobbyListResponse();
            if (object.lobbyList) {
                if (!Array.isArray(object.lobbyList))
                    throw TypeError(".tachyon.LobbyListResponse.lobbyList: array expected");
                message.lobbyList = [];
                for (var i = 0; i < object.lobbyList.length; ++i) {
                    if (typeof object.lobbyList[i] !== "object")
                        throw TypeError(".tachyon.LobbyListResponse.lobbyList: object expected");
                    message.lobbyList[i] = $root.tachyon.Lobby.fromObject(object.lobbyList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LobbyListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.LobbyListResponse
         * @static
         * @param {tachyon.LobbyListResponse} message LobbyListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.lobbyList = [];
            if (message.lobbyList && message.lobbyList.length) {
                object.lobbyList = [];
                for (var j = 0; j < message.lobbyList.length; ++j)
                    object.lobbyList[j] = $root.tachyon.Lobby.toObject(message.lobbyList[j], options);
            }
            return object;
        };

        /**
         * Converts this LobbyListResponse to JSON.
         * @function toJSON
         * @memberof tachyon.LobbyListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LobbyListResponse
         * @function getTypeUrl
         * @memberof tachyon.LobbyListResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LobbyListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.LobbyListResponse";
        };

        return LobbyListResponse;
    })();

    /**
     * LobbyStatus enum.
     * @name tachyon.LobbyStatus
     * @enum {number}
     * @property {number} LOBBY_UNLOCKED=0 LOBBY_UNLOCKED value
     * @property {number} LOBBY_FRIENDS=1 LOBBY_FRIENDS value
     * @property {number} LOBBY_WHITELIST=2 LOBBY_WHITELIST value
     * @property {number} LOBBY_LOCKED=3 LOBBY_LOCKED value
     */
    tachyon.LobbyStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LOBBY_UNLOCKED"] = 0;
        values[valuesById[1] = "LOBBY_FRIENDS"] = 1;
        values[valuesById[2] = "LOBBY_WHITELIST"] = 2;
        values[valuesById[3] = "LOBBY_LOCKED"] = 3;
        return values;
    })();

    tachyon.StartArea = (function() {

        /**
         * Properties of a StartArea.
         * @memberof tachyon
         * @interface IStartArea
         * @property {string|null} [type] StartArea type
         * @property {Object.<string,number>|null} [values] StartArea values
         */

        /**
         * Constructs a new StartArea.
         * @memberof tachyon
         * @classdesc Represents a StartArea.
         * @implements IStartArea
         * @constructor
         * @param {tachyon.IStartArea=} [properties] Properties to set
         */
        function StartArea(properties) {
            this.values = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartArea type.
         * @member {string} type
         * @memberof tachyon.StartArea
         * @instance
         */
        StartArea.prototype.type = "";

        /**
         * StartArea values.
         * @member {Object.<string,number>} values
         * @memberof tachyon.StartArea
         * @instance
         */
        StartArea.prototype.values = $util.emptyObject;

        /**
         * Creates a new StartArea instance using the specified properties.
         * @function create
         * @memberof tachyon.StartArea
         * @static
         * @param {tachyon.IStartArea=} [properties] Properties to set
         * @returns {tachyon.StartArea} StartArea instance
         */
        StartArea.create = function create(properties) {
            return new StartArea(properties);
        };

        /**
         * Encodes the specified StartArea message. Does not implicitly {@link tachyon.StartArea.verify|verify} messages.
         * @function encode
         * @memberof tachyon.StartArea
         * @static
         * @param {tachyon.IStartArea} message StartArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartArea.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.values != null && Object.hasOwnProperty.call(message, "values"))
                for (var keys = Object.keys(message.values), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).sint32(message.values[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StartArea message, length delimited. Does not implicitly {@link tachyon.StartArea.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.StartArea
         * @static
         * @param {tachyon.IStartArea} message StartArea message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartArea.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartArea message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.StartArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.StartArea} StartArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartArea.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.StartArea(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        if (message.values === $util.emptyObject)
                            message.values = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.sint32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.values[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartArea message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.StartArea
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.StartArea} StartArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartArea.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartArea message.
         * @function verify
         * @memberof tachyon.StartArea
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartArea.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!$util.isObject(message.values))
                    return "values: object expected";
                var key = Object.keys(message.values);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.values[key[i]]))
                        return "values: integer{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a StartArea message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.StartArea
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.StartArea} StartArea
         */
        StartArea.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.StartArea)
                return object;
            var message = new $root.tachyon.StartArea();
            if (object.type != null)
                message.type = String(object.type);
            if (object.values) {
                if (typeof object.values !== "object")
                    throw TypeError(".tachyon.StartArea.values: object expected");
                message.values = {};
                for (var keys = Object.keys(object.values), i = 0; i < keys.length; ++i)
                    message.values[keys[i]] = object.values[keys[i]] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a StartArea message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.StartArea
         * @static
         * @param {tachyon.StartArea} message StartArea
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartArea.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.values = {};
            if (options.defaults)
                object.type = "";
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            var keys2;
            if (message.values && (keys2 = Object.keys(message.values)).length) {
                object.values = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.values[keys2[j]] = message.values[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this StartArea to JSON.
         * @function toJSON
         * @memberof tachyon.StartArea
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartArea.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StartArea
         * @function getTypeUrl
         * @memberof tachyon.StartArea
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StartArea.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.StartArea";
        };

        return StartArea;
    })();

    tachyon.Lobby = (function() {

        /**
         * Properties of a Lobby.
         * @memberof tachyon
         * @interface ILobby
         * @property {number|null} [id] Lobby id
         * @property {string|null} [name] Lobby name
         * @property {number|null} [founderId] Lobby founderId
         * @property {boolean|null} [passworded] Lobby passworded
         * @property {tachyon.LobbyStatus|null} [locked] Lobby locked
         * @property {string|null} [engineName] Lobby engineName
         * @property {string|null} [engineVersion] Lobby engineVersion
         * @property {Array.<number>|null} [players] Lobby players
         * @property {Array.<number>|null} [spectators] Lobby spectators
         * @property {string|null} [ip] Lobby ip
         * @property {Object.<string,string>|null} [settings] Lobby settings
         * @property {Object.<string,tachyon.IStartArea>|null} [startAreas] Lobby startAreas
         * @property {string|null} [mapName] Lobby mapName
         * @property {string|null} [mapHash] Lobby mapHash
         * @property {boolean|null} ["public"] Lobby public
         */

        /**
         * Constructs a new Lobby.
         * @memberof tachyon
         * @classdesc Represents a Lobby.
         * @implements ILobby
         * @constructor
         * @param {tachyon.ILobby=} [properties] Properties to set
         */
        function Lobby(properties) {
            this.players = [];
            this.spectators = [];
            this.settings = {};
            this.startAreas = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Lobby id.
         * @member {number} id
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.id = 0;

        /**
         * Lobby name.
         * @member {string} name
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.name = "";

        /**
         * Lobby founderId.
         * @member {number} founderId
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.founderId = 0;

        /**
         * Lobby passworded.
         * @member {boolean} passworded
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.passworded = false;

        /**
         * Lobby locked.
         * @member {tachyon.LobbyStatus} locked
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.locked = 0;

        /**
         * Lobby engineName.
         * @member {string} engineName
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.engineName = "";

        /**
         * Lobby engineVersion.
         * @member {string} engineVersion
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.engineVersion = "";

        /**
         * Lobby players.
         * @member {Array.<number>} players
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.players = $util.emptyArray;

        /**
         * Lobby spectators.
         * @member {Array.<number>} spectators
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.spectators = $util.emptyArray;

        /**
         * Lobby ip.
         * @member {string} ip
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.ip = "";

        /**
         * Lobby settings.
         * @member {Object.<string,string>} settings
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.settings = $util.emptyObject;

        /**
         * Lobby startAreas.
         * @member {Object.<string,tachyon.IStartArea>} startAreas
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.startAreas = $util.emptyObject;

        /**
         * Lobby mapName.
         * @member {string} mapName
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.mapName = "";

        /**
         * Lobby mapHash.
         * @member {string} mapHash
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype.mapHash = "";

        /**
         * Lobby public.
         * @member {boolean} public
         * @memberof tachyon.Lobby
         * @instance
         */
        Lobby.prototype["public"] = false;

        /**
         * Creates a new Lobby instance using the specified properties.
         * @function create
         * @memberof tachyon.Lobby
         * @static
         * @param {tachyon.ILobby=} [properties] Properties to set
         * @returns {tachyon.Lobby} Lobby instance
         */
        Lobby.create = function create(properties) {
            return new Lobby(properties);
        };

        /**
         * Encodes the specified Lobby message. Does not implicitly {@link tachyon.Lobby.verify|verify} messages.
         * @function encode
         * @memberof tachyon.Lobby
         * @static
         * @param {tachyon.ILobby} message Lobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Lobby.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.founderId != null && Object.hasOwnProperty.call(message, "founderId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.founderId);
            if (message.passworded != null && Object.hasOwnProperty.call(message, "passworded"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.passworded);
            if (message.locked != null && Object.hasOwnProperty.call(message, "locked"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.locked);
            if (message.engineName != null && Object.hasOwnProperty.call(message, "engineName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.engineName);
            if (message.engineVersion != null && Object.hasOwnProperty.call(message, "engineVersion"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.engineVersion);
            if (message.players != null && message.players.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (var i = 0; i < message.players.length; ++i)
                    writer.int32(message.players[i]);
                writer.ldelim();
            }
            if (message.spectators != null && message.spectators.length) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork();
                for (var i = 0; i < message.spectators.length; ++i)
                    writer.int32(message.spectators[i]);
                writer.ldelim();
            }
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.ip);
            if (message.settings != null && Object.hasOwnProperty.call(message, "settings"))
                for (var keys = Object.keys(message.settings), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.settings[keys[i]]).ldelim();
            if (message.startAreas != null && Object.hasOwnProperty.call(message, "startAreas"))
                for (var keys = Object.keys(message.startAreas), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 13, wireType 2 =*/106).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.tachyon.StartArea.encode(message.startAreas[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.mapName != null && Object.hasOwnProperty.call(message, "mapName"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.mapName);
            if (message.mapHash != null && Object.hasOwnProperty.call(message, "mapHash"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.mapHash);
            if (message["public"] != null && Object.hasOwnProperty.call(message, "public"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message["public"]);
            return writer;
        };

        /**
         * Encodes the specified Lobby message, length delimited. Does not implicitly {@link tachyon.Lobby.verify|verify} messages.
         * @function encodeDelimited
         * @memberof tachyon.Lobby
         * @static
         * @param {tachyon.ILobby} message Lobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Lobby.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Lobby message from the specified reader or buffer.
         * @function decode
         * @memberof tachyon.Lobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {tachyon.Lobby} Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Lobby.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tachyon.Lobby(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.founderId = reader.int32();
                        break;
                    }
                case 4: {
                        message.passworded = reader.bool();
                        break;
                    }
                case 5: {
                        message.locked = reader.int32();
                        break;
                    }
                case 6: {
                        message.engineName = reader.string();
                        break;
                    }
                case 7: {
                        message.engineVersion = reader.string();
                        break;
                    }
                case 8: {
                        if (!(message.players && message.players.length))
                            message.players = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.players.push(reader.int32());
                        } else
                            message.players.push(reader.int32());
                        break;
                    }
                case 9: {
                        if (!(message.spectators && message.spectators.length))
                            message.spectators = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.spectators.push(reader.int32());
                        } else
                            message.spectators.push(reader.int32());
                        break;
                    }
                case 11: {
                        message.ip = reader.string();
                        break;
                    }
                case 12: {
                        if (message.settings === $util.emptyObject)
                            message.settings = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.settings[key] = value;
                        break;
                    }
                case 13: {
                        if (message.startAreas === $util.emptyObject)
                            message.startAreas = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.tachyon.StartArea.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.startAreas[key] = value;
                        break;
                    }
                case 14: {
                        message.mapName = reader.string();
                        break;
                    }
                case 15: {
                        message.mapHash = reader.string();
                        break;
                    }
                case 16: {
                        message["public"] = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Lobby message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof tachyon.Lobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {tachyon.Lobby} Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Lobby.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Lobby message.
         * @function verify
         * @memberof tachyon.Lobby
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Lobby.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.founderId != null && message.hasOwnProperty("founderId"))
                if (!$util.isInteger(message.founderId))
                    return "founderId: integer expected";
            if (message.passworded != null && message.hasOwnProperty("passworded"))
                if (typeof message.passworded !== "boolean")
                    return "passworded: boolean expected";
            if (message.locked != null && message.hasOwnProperty("locked"))
                switch (message.locked) {
                default:
                    return "locked: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.engineName != null && message.hasOwnProperty("engineName"))
                if (!$util.isString(message.engineName))
                    return "engineName: string expected";
            if (message.engineVersion != null && message.hasOwnProperty("engineVersion"))
                if (!$util.isString(message.engineVersion))
                    return "engineVersion: string expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i)
                    if (!$util.isInteger(message.players[i]))
                        return "players: integer[] expected";
            }
            if (message.spectators != null && message.hasOwnProperty("spectators")) {
                if (!Array.isArray(message.spectators))
                    return "spectators: array expected";
                for (var i = 0; i < message.spectators.length; ++i)
                    if (!$util.isInteger(message.spectators[i]))
                        return "spectators: integer[] expected";
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.settings != null && message.hasOwnProperty("settings")) {
                if (!$util.isObject(message.settings))
                    return "settings: object expected";
                var key = Object.keys(message.settings);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.settings[key[i]]))
                        return "settings: string{k:string} expected";
            }
            if (message.startAreas != null && message.hasOwnProperty("startAreas")) {
                if (!$util.isObject(message.startAreas))
                    return "startAreas: object expected";
                var key = Object.keys(message.startAreas);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "startAreas: integer key{k:int32} expected";
                    {
                        var error = $root.tachyon.StartArea.verify(message.startAreas[key[i]]);
                        if (error)
                            return "startAreas." + error;
                    }
                }
            }
            if (message.mapName != null && message.hasOwnProperty("mapName"))
                if (!$util.isString(message.mapName))
                    return "mapName: string expected";
            if (message.mapHash != null && message.hasOwnProperty("mapHash"))
                if (!$util.isString(message.mapHash))
                    return "mapHash: string expected";
            if (message["public"] != null && message.hasOwnProperty("public"))
                if (typeof message["public"] !== "boolean")
                    return "public: boolean expected";
            return null;
        };

        /**
         * Creates a Lobby message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof tachyon.Lobby
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {tachyon.Lobby} Lobby
         */
        Lobby.fromObject = function fromObject(object) {
            if (object instanceof $root.tachyon.Lobby)
                return object;
            var message = new $root.tachyon.Lobby();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.founderId != null)
                message.founderId = object.founderId | 0;
            if (object.passworded != null)
                message.passworded = Boolean(object.passworded);
            switch (object.locked) {
            default:
                if (typeof object.locked === "number") {
                    message.locked = object.locked;
                    break;
                }
                break;
            case "LOBBY_UNLOCKED":
            case 0:
                message.locked = 0;
                break;
            case "LOBBY_FRIENDS":
            case 1:
                message.locked = 1;
                break;
            case "LOBBY_WHITELIST":
            case 2:
                message.locked = 2;
                break;
            case "LOBBY_LOCKED":
            case 3:
                message.locked = 3;
                break;
            }
            if (object.engineName != null)
                message.engineName = String(object.engineName);
            if (object.engineVersion != null)
                message.engineVersion = String(object.engineVersion);
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".tachyon.Lobby.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i)
                    message.players[i] = object.players[i] | 0;
            }
            if (object.spectators) {
                if (!Array.isArray(object.spectators))
                    throw TypeError(".tachyon.Lobby.spectators: array expected");
                message.spectators = [];
                for (var i = 0; i < object.spectators.length; ++i)
                    message.spectators[i] = object.spectators[i] | 0;
            }
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.settings) {
                if (typeof object.settings !== "object")
                    throw TypeError(".tachyon.Lobby.settings: object expected");
                message.settings = {};
                for (var keys = Object.keys(object.settings), i = 0; i < keys.length; ++i)
                    message.settings[keys[i]] = String(object.settings[keys[i]]);
            }
            if (object.startAreas) {
                if (typeof object.startAreas !== "object")
                    throw TypeError(".tachyon.Lobby.startAreas: object expected");
                message.startAreas = {};
                for (var keys = Object.keys(object.startAreas), i = 0; i < keys.length; ++i) {
                    if (typeof object.startAreas[keys[i]] !== "object")
                        throw TypeError(".tachyon.Lobby.startAreas: object expected");
                    message.startAreas[keys[i]] = $root.tachyon.StartArea.fromObject(object.startAreas[keys[i]]);
                }
            }
            if (object.mapName != null)
                message.mapName = String(object.mapName);
            if (object.mapHash != null)
                message.mapHash = String(object.mapHash);
            if (object["public"] != null)
                message["public"] = Boolean(object["public"]);
            return message;
        };

        /**
         * Creates a plain object from a Lobby message. Also converts values to other types if specified.
         * @function toObject
         * @memberof tachyon.Lobby
         * @static
         * @param {tachyon.Lobby} message Lobby
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Lobby.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.players = [];
                object.spectators = [];
            }
            if (options.objects || options.defaults) {
                object.settings = {};
                object.startAreas = {};
            }
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.founderId = 0;
                object.passworded = false;
                object.locked = options.enums === String ? "LOBBY_UNLOCKED" : 0;
                object.engineName = "";
                object.engineVersion = "";
                object.ip = "";
                object.mapName = "";
                object.mapHash = "";
                object["public"] = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.founderId != null && message.hasOwnProperty("founderId"))
                object.founderId = message.founderId;
            if (message.passworded != null && message.hasOwnProperty("passworded"))
                object.passworded = message.passworded;
            if (message.locked != null && message.hasOwnProperty("locked"))
                object.locked = options.enums === String ? $root.tachyon.LobbyStatus[message.locked] === undefined ? message.locked : $root.tachyon.LobbyStatus[message.locked] : message.locked;
            if (message.engineName != null && message.hasOwnProperty("engineName"))
                object.engineName = message.engineName;
            if (message.engineVersion != null && message.hasOwnProperty("engineVersion"))
                object.engineVersion = message.engineVersion;
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = message.players[j];
            }
            if (message.spectators && message.spectators.length) {
                object.spectators = [];
                for (var j = 0; j < message.spectators.length; ++j)
                    object.spectators[j] = message.spectators[j];
            }
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            var keys2;
            if (message.settings && (keys2 = Object.keys(message.settings)).length) {
                object.settings = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.settings[keys2[j]] = message.settings[keys2[j]];
            }
            if (message.startAreas && (keys2 = Object.keys(message.startAreas)).length) {
                object.startAreas = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.startAreas[keys2[j]] = $root.tachyon.StartArea.toObject(message.startAreas[keys2[j]], options);
            }
            if (message.mapName != null && message.hasOwnProperty("mapName"))
                object.mapName = message.mapName;
            if (message.mapHash != null && message.hasOwnProperty("mapHash"))
                object.mapHash = message.mapHash;
            if (message["public"] != null && message.hasOwnProperty("public"))
                object["public"] = message["public"];
            return object;
        };

        /**
         * Converts this Lobby to JSON.
         * @function toJSON
         * @memberof tachyon.Lobby
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Lobby.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Lobby
         * @function getTypeUrl
         * @memberof tachyon.Lobby
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Lobby.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/tachyon.Lobby";
        };

        return Lobby;
    })();

    return tachyon;
})();

module.exports = $root;
