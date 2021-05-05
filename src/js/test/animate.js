export function frame(incFunc, ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  simpleAnimation(incFunc, ctx);
  update();
}

export function update(x) {
  x += 1;
}

export function simpleAnimation(incFunc, ctx, x, y) {
  incFunc(ctx);
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
};