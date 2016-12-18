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
        this.io.on("connection", this.connection.bind(this));
    }

    connection(socket){
        //инициализация
        socket.on("login", this.onAuth.bind(this, socket));
        socket.on("disconnect", this.onDisconnect.bind(this, socket));
    }

    onAuth(socket, user){
        this.users[socket.id] = user;
        socket.emit("connectionUsers", this.getConnectionUsers.call(this));
    }

    onDisconnect(socket){
        if(this.users[socket.id]) delete this.users[socket.id];
    }

    getConnectionUsers(){
        return _.map(this.users, (user) => user)
    }

}

module.exports = Socket;
