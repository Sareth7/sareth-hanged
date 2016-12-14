import { INIT_CONNECTION } from "../constants/SOCKET";

const initialState = { connected: false };

export default function socket(state = initialState, action) {
    switch(action.type){
        case INIT_CONNECTION:
            return action.payload;
        default:
            return state;
    }

}
