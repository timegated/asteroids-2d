import '../css/main.scss';
import { drawShip, drawAsteroid } from './lib/drawing';
import { drawGrid } from './lib/grid';
// import { frame, update, simpleAnimation } from './test/animate';
const canvas = document.querySelector('#asteroids');
const context = canvas.getContext('2d');
let x = 0;
let y = (Math.random() * canvas.height);
let yspeed = 0;
let gravity = 0.1;

// setInterval(() => {
//   frame(drawGrid(canvas, context, '#FFFFFF',
//   '#000000'), context);
// }, 1000.0/60.0);

function frame() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  draw(context);
  update();
}
// bouncing is switching the direction of travel
function update() {
  x += 1;
  y += yspeed;
  yspeed += gravity;
  if (y >= context.canvas.height) {
    yspeed *= -1;
  }
  if (x <= 0 || x >= context.canvas.width) {
    x = (x + context.canvas.width) % context.canvas.width;
  }
}

function draw(ctx) {
  drawGrid(canvas, ctx, '#FFFFFF', '#000000');
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

setInterval(frame, 1000 / 60);