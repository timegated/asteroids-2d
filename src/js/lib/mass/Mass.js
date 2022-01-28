function Mass(x, y, mass, radius, angle, x_speed, y_speed, rotation_speed) {
  this.x = x;
  this.y = y;
  this.mass = mass || 1;
  this.radius = radius || 50;
  this. angle = angle || 0;
  this.x_speed = x_speed || 0;
  this.y_speed = y_speed || 0;
  this.rotation_speed = rotation_speed || 0;
};

Mass.prototype.update = function (elapsed, ctx) {
  this.x += this.x_speed * elapsed;
  this.y += this.y_speed * elapsed;
  this.angle += this.rotation_speed * elapsed;
  this.angle %= (2 * Math.PI);
  if (this.x - this.radius > ctx.canvas.width) {
    this.x = -this.radius;
  }
  if (this.x + this.radius < 0) {
    this.x = ctx.canvas.width + this.radius;
  }
  if (this.y - this.radius > ctx.canvas.width) {
    this.y = -this.radius;
  }
  if (this.y + this.radius < 0) {
    this.y = ctx.canvas.height + this.radius;
  }
};

Mass.prototype.push = function (angle, force, elapsed) {
  this.x_speed += elapsed * (Math.cos(angle) * force) / this.mass;
  this.y_speed += elapsed * (Math.sin(angle) * force) / this.mass;
};

Mass.prototype.twist = function (force, elapsed) {
  this.rotation_speed += elapsed * force / this.mass;
};

Mass.prototype.speed = function () {
  return Math.sqrt(Math.pow(this.x_speed, 2) + Math.pow(this.y_speed, 2));
};

Mass.prototype.movement_angle = function () {
  return Math.atan2(this.y_speed, this.x_speed);
};

Mass.prototype.draw = function (c) {
  c.save();
  c.translate(this.x, this.y);
  c.rotate(this.angle);
  c.beginPath();
  c.arc(0, 0, this.radius, 0, 2 * Math.PI);
  c.lineTo(0, 0);
  c.strokeStyle = '#FFFFFF';
  c.stroke();
  c.restore();
};

export default Mass;
