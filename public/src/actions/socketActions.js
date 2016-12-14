import { INIT_CONNECTION } from "../constants/SOCKET";
import io from "socket.io-client";

export function initializeConnection(){
    return {
        type: INIT_CONNECTION,
        payload: io()
    }
}
