import '../css/main.scss';
import { drawShip, drawAsteroid } from './lib/drawing';
import { drawGrid } from './lib/grid';

const canvas = document.querySelector('#asteroids');
const context = canvas.getContext('2d');
let radius = context.canvas.width * 0.1;


drawGrid(canvas, context, '#000000', '#2C2C2C');
// let x, y, angle = 0;
// let w = context.canvas.width, h = context.canvas.height;
// for(y = h/20; y < h; y += h/10) {
//  for(x = w/20; x < w; x += w/10) {
//    context.save();
//    context.translate(x, y);
//  context.rotate(angle);
//  drawShip(context, w/30, {guide: true, lineWidth: 1});
//  context.restore();
//  angle = (angle + 0.0075 * Math.PI);
//  }
// }
