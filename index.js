const net = require('net');
const fs = require('fs');

let x = 1;

const server = net.createServer((socket) => {
  socket.on('data', data => {
    let file = fs.createWriteStream('./file_' + x + '.txt');
    file.write(data);
    x += +1;
  });
});

server.listen(3000, () => {
  console.log('opened server on', server.address());
})
