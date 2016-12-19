import io from "socket.io-client";
import { bindActionCreators } from 'redux';

import { INIT_CONNECTION } from "../constants/SOCKET";
import { setConnectionUsers, userDisconnect, userConnection } from "./usersActions";
import { addMessage } from "./chatActions";

export function initializeConnection(){
    return function (dispatch) {
        const socket = io();
        socket.on("connectionUsers", bindActionCreators(setConnectionUsers, dispatch));
        socket.on("userDisconnect", bindActionCreators(userDisconnect, dispatch));
        socket.on("userConnection", bindActionCreators(userConnection, dispatch));
        socket.on("addMessage", bindActionCreators(addMessage, dispatch));

        dispatch({
            type: INIT_CONNECTION,
            payload: socket
        });
    }
}
