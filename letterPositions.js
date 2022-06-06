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


//  LETTER POSITIONS
const letterPositions = function(sentence) {
  const results = {};
  // loop through sentence
  for (let i = 0; i < sentence.length; i++) {
    // if statement to check if the letter is already there and counts it
    if (results[sentence[i]]) {
      // letter is pushed to the end of array if found
      results[sentence[i]].push(i);
    } else {
      // continue to loop though sentence to find more letters
      results[sentence[i]] = [i];
    }
  }
  // return results
  return results;
};

console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;