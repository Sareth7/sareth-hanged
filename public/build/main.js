var socket = io();
socket.on("connect", function(message){
  console.log(message)
})
