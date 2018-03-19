var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var circles = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3000);

io.on('connection', function (socket) {
   for(var i in circles) {
     io.sockets.emit("display circles", circles[i]);
   }
   socket.on("send circles", function (data) {
       circles.push(data);
       io.sockets.emit("display circles", data);
   })
});
