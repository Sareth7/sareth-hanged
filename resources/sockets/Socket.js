var io = require("socket.io");

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
    socket.emit("connect", "your connect");
  }
}

module.exports = Socket;
