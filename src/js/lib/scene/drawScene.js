import { drawGrid } from "../grid";
import { drawAsteroid } from '../asteroid/asteroid';
export function drawScene(el, ctx, guide, asteroid, x, y) {
  const radius = 50;
  const noise = 0.2;
  let angle = 0;
  let point = 0;
  const segments = 24;
  const shape = [];
  for (let i = 0; i < segments; i++) {
    shape.push(Math.random() - 0.5);
  }
  if (guide) {
    drawGrid(el, ctx, '#FFFFFF', '#FFFFFF');
  };
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  console.log(asteroid)
  console.log(guide)
  drawAsteroid(ctx, radius, shape, point, { guide: guide, noise: noise });

  ctx.restore();
};