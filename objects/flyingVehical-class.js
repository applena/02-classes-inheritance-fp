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
  constructor(name) {
    super(name, 'fast');
  };

}

class Helicopter extends FlyingVehical{
  constructor(name) {
    super(name, 'slow');
  }

  loop() {
    return 'Wheee!';
  }

}

module.exports = {Airplane, Helicopter};
