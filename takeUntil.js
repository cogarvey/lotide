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


//  TAKE UNTIL 
const takeUntil = function(array, callback) {
  let result = [];
  for (item of array) {
    if (callback(item) === false) {
      result.push(item)
    } else {
      return result;
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(results1, data1.slice(0, 5));
assertArraysEqual(results2, data2.slice(0, 4));
