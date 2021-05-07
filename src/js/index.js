import { drawAsteroid } from '../js/lib/asteroid/asteroid';
import { drawScene } from '../js/lib/scene/drawScene';
import '../css/main.scss';

const canvas = document.querySelector('#asteroids');
const context = canvas.getContext('2d');

// Global variables for defining characteristics of asteroids

// asteroid state
let x = context.canvas.width * Math.random();
let y = context.canvas.height * Math.random();


// asteroid movement
const xSpeed = context.canvas.width * (Math.random() - 0.5);
const ySpeed = context.canvas.height * (Math.random() - 0.5);
const rotSpeed = 2 * Math.PI * (Math.random() - 0.5);



drawScene(canvas, context, true, x, y);

function update(elapsed) {
  if (x - radius + elapsed * xSpeed > context.canvas.width) {
    x = -radius;
  }
  if (x + radius + elapsed * xSpeed < 0) {
    x = context.canvas.width + radius;
  }
  if (y - radius + elapsed * ySpeed > context.canvas.height) {
    y = -radius;
  }
  if (y + raidius + elapsed * ySpeed < 0) {
    y = context.canvas.height + radius
  }
  x += elapsed * xSpeed;
  y += elapsed * ySpeed;
  angle = (angle + elapsed * rotation_speed) % (2 * Math.PI);
};