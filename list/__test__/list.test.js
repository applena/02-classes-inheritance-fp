'use strict';

// These 2 should be interchangeable!
const List = require('../list-constructor.js');
// const List = require('../list-class.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('removes the first value of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.shift();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('b');
  });

  it('puts an item at the front of the array', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift('z');
    expect(stuff.length).toEqual(3);
    expect(stuff.data[0]).toEqual('z');
  });

  it('starts at an index and removes the number of specified items then puts in the new item at that location', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.splice(1, 1, 'z');
    expect(stuff.length).toEqual(3);
    expect(stuff.data[1]).toEqual('z');
  });

  it('throws an error when arguments are invalid', () => {
    let stuff = new List();
    expect(()=>{
      stuff.splice('zip', '23');
    }).toThrow();
  });

  it('starting at the first param it returns a new obj from that point on or until the second param', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    expect(stuff.slice(1,2)[0]).toEqual('b');
  });

});
