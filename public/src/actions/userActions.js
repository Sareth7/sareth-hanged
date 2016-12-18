import {
    LOGIN_VK_REQUEST,
    LOGIN_VK_SUCCESS,
    LOGIN_VK_FAIL
} from "../constants/USER";

import { SOCKET_EMIT } from "../constants/SOCKET";
import { push } from "react-router-redux";

export function handleVKLogin() {
    return function (dispatch) {
        dispatch({ type: LOGIN_VK_REQUEST });
        VK.Auth.login((response) => {
           if(response.session){
               const { user } = response.session;
               dispatch({
                   type: LOGIN_VK_SUCCESS,
                   payload: user
               });

               dispatch({
                   type: SOCKET_EMIT,
                   payload: { event: "login", data: user}
               });

               dispatch(push("/abyss"));
           }else{
               dispatch({
                   type: LOGIN_VK_FAIL,
                   error: true,
                   payload: new Error("Ошибка авторизации")
               })
           }
        }, 7)
    }
}
