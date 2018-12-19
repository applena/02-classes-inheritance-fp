'use strict';

const FlyingVehical = () => ({
  fly: () => {
    return 'Flyin';
  },

  crash: () => {
    return 'Fallin';
  },
})

function Airplane(name, maxSpeed) {
  let airplane = Object.assign(
    {},
    {name},
    {maxSpeed: 'fast'},
    FlyingVehical()
  );

  return airplane;
}

function Helicopter(name) {
  let helicopter = Object.assign (
    {},
    {name},
    {maxSpeed: 'slow'},
    {loop},
    FlyingVehical()
  )
  
  function loop(){return 'Whee!';}
  return helicopter;
}

module.exports = {Airplane, Helicopter};


