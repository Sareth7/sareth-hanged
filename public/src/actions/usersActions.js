import { SET_CONNECTION_USERS } from "../constants/USERS";

export function setConnectionUsers(users) {
    return (dispatch) => {
        dispatch({
            type: SET_CONNECTION_USERS,
            payload: users
        })
    }
}
