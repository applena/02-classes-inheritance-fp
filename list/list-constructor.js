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

/**
 * adds and item to the beginning of the object
 * @param {*} item 
 */
List.prototype.unshift = function(item) {
  this.length++;
  for(let i = 0; i < this.length; i++){
    this.data[i+1] = this.data[i];
  }
  this.data[0] = item;
};

/**
 * removes the number specified from the starting index and replaces it with the newItem
 * @param {} startIdx 
 * @param {*} numRemove 
 * @param {*} newItem 
 */
List.prototype.splice = function(startIdx, numRemove, newItem) {
  if(
    typeof startIdx !== 'number' || 
    typeof numRemove !== 'number'
  ){
    throw('invalid arguments');
  }

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

/**
 * creates a neww array from the starting index to the ending index
 * @param {} startingIdx 
 * @param {*} endingIdx 
 */
List.prototype.slice = function(startingIdx, endingIdx) {
  endingIdx = endingIdx || this.length;
  let newObj = {};
  console.log('******SLICE******', this.data, startingIdx, endingIdx);
  for(let i=0; i<=(endingIdx-startingIdx); i++){
    newObj[i] = this.data[startingIdx + i];
  }
  console.log('this is the newObj', newObj)
  return newObj;
};

module.exports = List;
