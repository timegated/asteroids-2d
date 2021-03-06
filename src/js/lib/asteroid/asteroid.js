export const drawAsteroid = (ctx, radius, shape, point, options) => {
  options = options || {};
  ctx.stokeStyle = options.stroke || '#FFFFFF';
  ctx.fillStyle = options.fill || '#FFFFFF';
  ctx.save();
  ctx.beginPath();
  for (let i = 0; i < shape.length; i++) {
    // rotating the canvas
    ctx.rotate(2 * Math.PI / shape.length);
    ctx.lineTo(radius + radius * options.noise * shape[i], point);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  // if the property guide exists
  if (options.guide) {
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath()
    ctx.lineWidth = 0.2;
    ctx.arc(0, 0, radius + radius * options.noise, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius - radius * options.noise, 0, 2 * Math.PI);
    ctx.stroke();
  }
  ctx.restore();
}