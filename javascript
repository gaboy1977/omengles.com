const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let waitingUsers = [];

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('findPartner', () => {
    if (waitingUsers.length > 0) {
      const partnerSocket = waitingUsers.pop();
      socket.emit('partnerFound', partnerSocket.id);
      partnerSocket.emit('partnerFound', socket.id);
    } else {
      waitingUsers.push(socket);
    }
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    waitingUsers = waitingUsers.filter(user => user.id !== socket.id);
  });
});

server.listen(3000, () => {
  console.log('Omengles server running on port 3000');
});
