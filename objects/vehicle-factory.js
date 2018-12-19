'use strict';

const Vehical = () => ({
  stop: () => {
    return 'Stopping';
  },

  drive: () => {
    return 'Moving Forward';
  },
});

function Car(name) {
  let car = Object.assign(
    {},
    {name},
    {wheels: 4},
    Vehical()
  );

  return car;
}

function Motorcycle(name) {
  let motorcycle = Object.assign (
    {},
    {name},
    {wheels: 2},
    {wheelie},
    Vehical()
  );
  
  function wheelie(){return 'Whee!';}
  return motorcycle;
}

module.exports = {Car, Motorcycle};


