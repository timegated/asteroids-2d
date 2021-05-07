let x = 0;
let y = context.canvas.height / 5;
let radius = 20;
// velocity of the ball
let yspeed = 0;
let xspeed = 0;
let gravity = 0.1;
// pacman's mouth
let mouth = 0;

function frame() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  draw(context);
  update();
}
// bouncing is switching the direction of travel
// updates the frame at each interval
function update() {
  x += 1;
  y += yspeed;
  yspeed += gravity;
  if (y >= context.canvas.height - radius) {
    y = context.canvas.height - radius;
    yspeed *= -0.9;
    xspeed *= 0.20;
  }
  if (x <= 0 || x >= context.canvas.width) {
    x = (x + context.canvas.width) % context.canvas.width;
  }
  mouth = Math.abs(Math.sin(6 * Math.PI * x / (context.canvas.width)));
}

function draw(ctx) {
  drawGrid(canvas, ctx, 'transparent', 'transparent');
  ctx.beginPath()
  ctx.save();
  ctx.translate(x, y);
  drawPacman(ctx, radius, mouth);
  ctx.restore();
}



setInterval(frame, 1000 / 60);