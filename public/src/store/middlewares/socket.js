import { SOCKET_EMIT } from "../../constants/SOCKET";

export default function socketEmitMiddleware(store) {
    return next => action => {
        if(action.type === SOCKET_EMIT ){
            const { socket } = store.getState();
            const { event, data } = action.payload;
            socket.emit(event, data);
        }

        return next(action)
    }
}
