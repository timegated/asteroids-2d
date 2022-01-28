import Mass from '../mass/Mass';
import { drawAsteroid } from '../asteroid/asteroid';
import { extend } from '../utils/extender';

function Asteroid(mass, x, y, x_speed, y_speed, rotation_speed) {
  var density = 1;
  var radius = Math.sqrt((mass / density) / Math.PI);
  this.super(mass, radius, x, y, 0, x_speed, y_speed, rotation_speed);
  this.circumference = 2 * Math.PI * this.radius;
  this.segments = Math.ceil(this.circumference / 15);
  this.segments = Math.min(25, Math.max(5, this.segments));
  this.noise = 0.2;
  this.shape = [];

  for (var i = 0; i < this.segments; i++) {
    this.shape.push(2 * (Math.random() - 0.5));
  }
};

extend(Asteroid, Mass);

console.log(Mass);
console.log(extend(Asteroid, Mass));

Asteroid.prototype.draw = function (ctx, guide) {
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.angle);
  drawAsteroid(ctx, this.radius, this.shape, {
    noise: this.noise,
    guide: guide,
  });
  ctx.restore();
};

export default Asteroid;