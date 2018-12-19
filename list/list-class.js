'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  /**
 * remove item from beginning array, shifting other items 1 left.
 * E.g. {0:a, 1:b, 2:c} => {0:b, 1:c}
 */
  shift() {
    this.length--;
    for(let i = 0; i < this.length; i++){
      this.data[i]= this.data[i+1];
    }
    delete this.data[this.length];
  }

  /**
   * adds and item to the beginning of the object
   * @param {*} item 
   */
  unshift(item) {
    this.length++;
    for(let i = 0; i < this.length; i++){
      this.data[i+1] = this.data[i];
    }
    this.data[0] = item;
  }

  /**
   * removes the number specified from the starting index and replaces it with the newItem
   * @param {} startIdx 
   * @param {*} numRemove 
   * @param {*} newItem 
   */
  splice(startIdx, numRemove, newItem) {
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
  }

  /**
   * creates a neww array from the starting index to the ending index
   * @param {} startingIdx 
   * @param {*} endingIdx 
   */
  slice(startingIdx, endingIdx) {
    endingIdx = endingIdx || this.length;
    let newObj = {};
    for(let i=0; i<=(endingIdx-startingIdx); i++){
      newObj[i] = this.data[startingIdx + i];
    }
    return newObj;
  }
}

module.exports = List;
