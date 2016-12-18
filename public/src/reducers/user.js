import {
    LOGIN_VK_REQUEST,
    LOGIN_VK_SUCCESS,
    LOGIN_VK_FAIL
} from "../constants/USER";

const initialState = { error: '' };

export default function user(state = initialState, action) {
    switch(action.type){
        case LOGIN_VK_SUCCESS:
            return {...state, ...action.payload };
        case LOGIN_VK_FAIL:
            return { ...state, error: action.payload.message };
        default:
            return state;
    }
}
