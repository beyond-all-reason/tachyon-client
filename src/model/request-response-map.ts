import { requests } from "~/model/requests";
import { responses } from "~/model/responses";

function shape<T extends Partial<Record<keyof typeof requests, keyof typeof responses>>>(value: T): T {
    return value;
}

export const requestResponseMap = shape({
    "c.system.ping": "s.system.pong",
    "c.auth.register": "s.auth.register",
    "c.auth.get_token": "s.auth.get_token",
    "c.auth.login": "s.auth.login",
    "c.auth.verify": "s.auth.verify",
    "c.lobby.query": "s.lobby.query",
} as const);