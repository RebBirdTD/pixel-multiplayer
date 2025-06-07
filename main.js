const socket = io("https://YOUR-REPLIT-URL-HERE");

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const gridSize = 16;
let players = {};

socket.on("updatePlayers", (serverPlayers) => {
  players = serverPlayers;
  draw();
});

document.addEventListener("keydown", (e) => {
  socket.emit("move", e.key);
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let id in players) {
    const p = players[id];
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x * gridSize, p.y * gridSize, gridSize, gridSize);
  }
}
