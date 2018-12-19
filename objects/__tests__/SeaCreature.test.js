'use strict';

// const SeaCreature = require('../SeaCreature-constructor.js');
// const SeaCreature = require('../SeaCreature-class.js');
const SeaCreature = require('../SeaCreature-factory.js');

describe('SeaCreatures', () => {

  describe('Fish', () => {

    let Fish = new SeaCreature.Fish('foo');

    it('goes very fast', () => {
      expect(Fish.speed).toEqual('fast');
    });

    it('can eat', () => {
      expect(Fish.eat()).toBeTruthy();
    });

    it('can make babies', () => {
      expect(Fish.mate()).toBeTruthy();
    });

    it('is yummy', () => {
      expect(Fish.delicious).toBeUndefined();
    });

  });

  describe('Lobster', () => {

    let Lobster = new SeaCreature.Lobster('foo');

    it('goes slow', () => {
      expect(Lobster.speed).toEqual('slow');
    });

    it('can eat', () => {
      expect(Lobster.eat()).toBeTruthy();
    });

    it('can make babies', () => {
      expect(Lobster.mate()).toBeTruthy();
    });

    it('is delicious', () => {
      expect(Lobster.delicious()).toBeTruthy();
    });

  });

});
