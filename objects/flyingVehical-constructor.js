'use strict';

const FlyingVehicle = function(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
};

FlyingVehicle.prototype.fly = () => {
  return 'I am flyin';
};

FlyingVehicle.prototype.crash = () => {
  return 'I am Crashin';
};

// Airplane Constructor
const Airplane = function(name) {
  FlyingVehicle.call(this, name, 'fast');
};

Airplane.prototype = new FlyingVehicle();

//Helicopter Constructor
const Helicopter = function(name) {
  FlyingVehicle.call(this,name,'slow');
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.loop = () => {
  return 'Wheee!';
};

module.exports = {Airplane, Helicopter};
