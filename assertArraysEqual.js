const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');


// ASSERT ARRAYS EQUAL
const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  assertEqual(result, true);
};



module.exports = assertArraysEqual;