import { SET_CONNECTION_USERS, USER_DISCONNECT, USER_CONNECTION } from "../constants/USERS";

export function setConnectionUsers(users) {
    return (dispatch) => {
        dispatch({
            type: SET_CONNECTION_USERS,
            payload: users
        })
    }
}

export function userDisconnect(id) {
    return (dispatch, getState) => {
        let { users } = getState();
        users = users.find(user => user.id !== id) || [];
        dispatch({
            type: USER_DISCONNECT,
            payload: users
        })
    }
}

export function userConnection(user) {
    return (dispatch, getState) => {
        let { users } = getState();
        if(!users.find(user => user.id === user.id)){
            dispatch({
                type: USER_CONNECTION,
                payload: user
            })
        }
    }
}
