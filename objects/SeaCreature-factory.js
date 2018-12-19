'use strict';

const SeaCreature = () => ({
  eat: () => {
    return 'eatin';
  },

  mate: () => {
    return 'matin';
  },
});

function Fish(name) {
  let fish = Object.assign(
    {},
    {name},
    {speed: 'fast'},
    SeaCreature()
  );

  return fish;
}

function Lobster(name) {
  let lobster = Object.assign (
    {},
    {name},
    {speed: 'slow'},
    {delicious},
    SeaCreature()
  );
  
  function delicious(){return 'Yummmmm';}
  return lobster;
}

module.exports = {Fish, Lobster};


