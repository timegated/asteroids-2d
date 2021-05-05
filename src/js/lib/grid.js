export const drawGrid = (el, ctx, stroke, fill) => {
  ctx.save();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 0.25;
  ctx.fillStyle = fill;

  for (let x = 0; x < el.width; x += 10) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, el.height);
    if (x % 50 == 0) { ctx.fillText(x, x, 10);}
    ctx.lineWidth = (x % 50 == 0) ? 0.5 : 0.25;
    ctx.stroke()
  }
  for (let y = 0; y < el.height; y += 10) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(el.width, y);
    if (y % 50 == 0) { ctx.fillText(y, 0, y + 10) };
    ctx.lineWidth = (y % 50 == 0) ? 0.5 : 0.25;
    ctx.stroke()
  }
  ctx.restore();
};