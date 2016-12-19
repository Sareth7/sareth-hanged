import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import socket from "./socket";
import user from "./user";
import abyss from "./abyss";


export default combineReducers({
    socket,
    user,
    abyss,
    routing: routerReducer
})
