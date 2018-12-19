'use strict';

const SeaCreature = function(name, speed) {
  this.name = name;
  this.speed = speed;
};

SeaCreature.prototype.eat = () => {
  return 'eatin';
};

SeaCreature.prototype.mate = () => {
  return 'matin';
};

// Fish Constructor
const Fish = function(name) {
  SeaCreature.call(this, name, 'fast');
};

Fish.prototype = new SeaCreature();

//Lobster Constructor
const Lobster = function(name) {
  SeaCreature.call(this,name,'slow');
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.delicious = () => {
  return 'yummmm';
};

module.exports = {Fish, Lobster};
