'use strict';


// var express = require('express');
// var app = express();

// app.listen(process.env.PORT || 3000, function(){
//   console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
// });

// const Vehicle = require('./constructor.js');
// const Vehicle = require('./class.js');
const Vehicle = require('./factory.js');

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

