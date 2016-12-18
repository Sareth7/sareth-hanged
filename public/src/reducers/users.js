import { SET_CONNECTION_USERS } from "../constants/USERS";

const initialState = [];

export default function users(state = initialState, action) {
    switch (action.type){
        case SET_CONNECTION_USERS:
            return [...state, ...action.payload];
        default:
            return state;
    }
}
