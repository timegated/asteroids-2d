export const drawShip = (ctx, radius, options) => {
  options = options || {};
  ctx.save();
  if(options.guide) {
  ctx.strokeStyle = "white";
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  }
  ctx.lineWidth = options.lineWidth || 2;
  ctx.strokeStyle = options.stroke || "white";
  ctx.fillStyle = options.fill || "black";
  let angle = (options.angle || 0.5 * Math.PI) / 2;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(
  Math.cos(Math.PI - angle) * radius,
  Math.sin(Math.PI - angle) * radius
  );
  ctx.lineTo(
  Math.cos(Math.PI + angle) * radius,
  Math.sin(Math.PI + angle) * radius
  );
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

export const drawAsteroid = (ctx, radius, shape, point, options) => {
  options = options || {};
  ctx.stokeStyle = options.stroke || 'white';
  ctx.fillStyle = options.fill || 'black';
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