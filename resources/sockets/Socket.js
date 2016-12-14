var io = require("socket.io");
var uuid = require("uuid");

class Socket {
    constructor(server){
        this.io = io(server);
        this.init();
    }

    init(){
        this.io.on("connection", this.connection)
    }

    connection(socket){
        console.log("user connection...");
        //socket.emit("message", {message: `your id - ${uuid.v1()}`});

        socket.on("auth", (data) => console.log(data));
    }
}

module.exports = Socket;
