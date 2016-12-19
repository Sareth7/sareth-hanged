import { SET_CONNECTION_USERS, USER_DISCONNECT, USER_CONNECTION } from "../constants/USERS";
import { SEND_MESSAGE, ADD_MESSAGE} from "../constants/CHAT";

const initialState = {
    users: [],
    messages: []
};

export default function users(state = initialState, action) {
    switch (action.type){
        case SET_CONNECTION_USERS:
            return {...state, users: [...action.payload]};
        case USER_DISCONNECT:
            return {...state, users: [...action.payload]};
        case USER_CONNECTION:
            return {...state, users: [...state.users, action.payload]};
        case ADD_MESSAGE:
            return {...state, messages: [...action.payload]}
        default:
            return state;
    }
}
