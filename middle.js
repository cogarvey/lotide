const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');


// create a function that gets the middle number(s) of an array
const middle = function(array) {
  if (array.length < 3) {
    return [];
  }

  // for odd arrays
  if (array.length % 2) {
    const index = Math.floor(array.length / 2);
    return [array[index]];

  }
  // for equal arrays
  const index = Math.floor(array.length / 2);

  return [array[index - 1], array[index]];
};



// TESTS


module.exports = middle;