// ASSERT EQUALS
const assertEqual = function(actual, expexted) {
  if (actual === expexted) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expexted}`);
  }
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expexted}`);
};


// EQUALS ARRAY
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// ASSERT ARRAYS EQUAL
const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  assertEqual(result, true);
};


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
// const result = middle([1, 2, 3, 4]);
// console.log(result)
// assertArraysEqual(result, [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);



// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []

// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]