import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import socket from "./socket";
import user from "./user";
import users from "./users";


export default combineReducers({
    socket,
    user,
    users,
    routing: routerReducer
})
