// EQUALS ARRAY
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      // console.log(false);
      return false;
    }
  }
  // console.log(true);
  return true;
};

// ASSERT EQUALS
const assertEqual = function(actual, expexted) {
  if (actual === expexted) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expexted}`);
  }
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expexted}`);
};


// ASSERT ARRAYS EQUAL
const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  assertEqual(result, true);
};


// test out the function
// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

module.exports = assertArraysEqual;