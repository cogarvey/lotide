const assertEqual = function(actual, expexted) {
  if (actual === expexted) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expexted}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expexted}`);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("one", 1);

function eqArrays(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
};
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false