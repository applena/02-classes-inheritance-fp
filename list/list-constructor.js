'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

/**
 * remove item from beginning array, shifting other items 1 left.
 * E.g. {0:a, 1:b, 2:c} => {0:b, 1:c}
 */
List.prototype.shift = function() {
  this.length--;
  for(let i = 0; i < this.length; i++){
    this.data[i]= this.data[i+1];
  }
  delete this.data[this.length];
};

List.prototype.unshift = function(item) {
  this.length++;
  for(let i = 0; i < this.length; i++){
    this.data[i+1] = this.data[i];
  }
  this.data[0] = item;
};

List.prototype.splice = function(startIdx, numRemove, newItem) {
  this.length = this.length - numRemove;
  //removes the numRemove from the starting index
  for (let i=startIdx; i<numRemove; i++){
    delete this.data[i];
  }
  //moves everything to the right at the starting index
  for (let i=startIdx; i < this.length; i++){
    this.data[i+1] = this.data[i];
  }
  this.data[startIdx] = newItem;
  this.length++;
};

List.prototype.slice = function(startingIdx, endingIdx) {
  endingIdx = endingIdx || this.length;
  let newObj = {};
  console.log('***************8', this.data, startingIdx, endingIdx);
  for(let i=0; i<=(endingIdx-startingIdx); i++){
    newObj[i] = this.data[startingIdx + i];
  }
  console.log('this is the newObj', newObj)
  return newObj;
};

// console.log(List.push("cookie"));
module.exports = List;
