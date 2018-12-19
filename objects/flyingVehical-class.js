'use strict';

class FlyingVehical {
  constructor(name, maxSpeed){
    this.name = name;
    this.maxSpeed = maxSpeed;
  }

  fly() {
    return 'I am flyin';
  }

  crash() {
    return 'I am crashin';
  }
}

class Airplane extends FlyingVehical {
  constructor(name, maxSpeed) {
    super(name, maxSpeed);
  };

}

class Helicopter extends FlyingVehical{
  constructor(name, maxSpeed) {
    super(name, maxSpeed);
  }

  loop() {
    return 'Wheee!';
  }

}

module.exports = {Airplane, Helicopter};
