'use strict';

// const FlyingVehical = require('../flyingVehical-constructor.js');
const FlyingVehical = require('../flyingVehical-class.js');
// const FlyingVehical = require('../flyingVehical-factory.js');

describe('FlyingVehicals', () => {

  describe('Airplane', () => {

    let airplane = new FlyingVehical.Airplane('foo');

    it('goes very fast', () => {
      expect(airplane.maxSpeed).toEqual('fast');
    });

    it('can fly', () => {
      expect(airplane.fly()).toBeTruthy();
    });

    it('can crash', () => {
      expect(airplane.crash()).toBeTruthy();
    });

    it('cannot do a loop', () => {
      expect(airplane.loop).toBeUndefined();
    });

  });

  describe('Helicopter', () => {

    let helicopter = new FlyingVehical.Helicopter('foo');

    it('goes slow', () => {
      expect(helicopter.maxSpeed).toEqual('slow');
    });

    it('can fly', () => {
      expect(helicopter.fly()).toBeTruthy();
    });

    it('can crash', () => {
      expect(helicopter.crash()).toBeTruthy();
    });

    it('cannot do a loop', () => {
      expect(helicopter.loop()).toBeTruthy();
    });

  });

});
