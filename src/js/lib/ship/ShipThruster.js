function ShipThruster (x, y, power) {
  this.super(x, y, 10, 20, 1.5 * Math.PI);
  this.thruster_power = power;
  this.thruster_on = false;
};


export default ShipThruster;
