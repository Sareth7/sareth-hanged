import io from "socket.io-client";
import { bindActionCreators } from 'redux';

import { INIT_CONNECTION } from "../constants/SOCKET";
import { setConnectionUsers } from "./usersActions";

export function initializeConnection(){
    return function (dispatch) {
        const socket = io();
        socket.on("connectionUsers", bindActionCreators(setConnectionUsers, dispatch));
        
        dispatch({
            type: INIT_CONNECTION,
            payload: socket
        });
    }
}
