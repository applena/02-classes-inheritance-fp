'use strict';

class SeaCreature {
  constructor(name, speed){
    this.name = name;
    this.speed = speed;
  }

  eat() {
    return 'eatin';
  }

  mate() {
    return 'matin';
  }
}

class Fish extends SeaCreature {
  constructor(name) {
    super(name, 'fast');
  };

}

class Lobster extends SeaCreature{
  constructor(name) {
    super(name, 'slow');
  }

  delicious() {
    return 'Yummmm';
  }

}

module.exports = {Fish, Lobster};
