var socket = io.connect('http://localhost:3000');
   
function setup(){
    createCanvas(windowWidth, windowHeight);
    background("#acacac");
}

function handleCoords(msg) {
    fill("blue");
    ellipse(data[0], data[1], 32, 32);
}

function mouseDragged() {
  socket.emit("send coords", [mouseX, mouseY]);
}

socket.on('display coords', handleCoords);

