import { SEND_MESSAGE, ADD_MESSAGE} from "../constants/CHAT";
import { SOCKET_EMIT } from "../constants/SOCKET";

export function sendMessage(message) {
    return {
        type: SOCKET_EMIT,
        payload: {
            event: SEND_MESSAGE,
            data: message
        }
    }
}

export function addMessage(message) {
    return (dispatch, getState) => {
        let { abyss: { messages } } = getState();
        if(messages.length > 20){
            messages.shift();
        }

        dispatch({
            type: ADD_MESSAGE,
            payload: [...messages, message]
        })
    }
}

