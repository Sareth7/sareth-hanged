var io = require("socket.io");
var uuid = require("uuid");
var _ = require("lodash");
var auth = require("../auth");

class Socket {
    constructor(ctx){
        this.io = io(ctx.http);
        this.auth = auth(ctx);
        this.init();
    }

    init(){
        this.users = {};
        this.publicRoom = uuid.v4();
        this.io.on("connection", this.connection.bind(this));

        console.log(this.publicRoom);
    }

    connection(socket){
        //инициализация
        socket.on("login", this.onAuth.bind(this, socket));
        socket.on("SEND_MESSAGE", this.onSendMessage.bind(this, socket));
        socket.on("disconnect", this.onDisconnect.bind(this, socket));
    }

    emitToRoom(room, eventName, data, socket = null){
        if(socket){
            socket.broadcast.to(room).emit(eventName, data);
        }else{
            this.io.sockets.in(room).emit(eventName, data);
        }
    }

    getClientsInRoom(room = this.publicRoom){
        return this.io.sockets.adapter.rooms[room];
    }

    emitToPublicRoom(eventName, data, socket = null){
        this.emitToRoom(this.publicRoom, eventName, data, socket);
    }

    onAuth(socket, user){
        this.users[user.id] = user;
        socket.user = user.id;
        //подключение к комнатам
        socket.join(this.publicRoom);
        socket.join(user.id);
        
        socket.emit("connectionUsers", this.getConnectionUsers.call(this));
        if(this.getClientsInRoom(user.id).length == 1) this.emitToPublicRoom("userConnection", user, socket);
    }

    onSendMessage(socket, message){
        this.emitToPublicRoom("addMessage", message);
    }

    onDisconnect(socket){
        const userId = socket.user;

        if(this.users[userId] && !this.getClientsInRoom(userId)){
            delete this.users[userId];
            this.emitToPublicRoom("userDisconnect", userId, socket);
        }

    }

    getConnectionUsers(){
        return _.map(this.users, (user) => user)
    }

}

module.exports = Socket;
