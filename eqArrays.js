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

// create a function with eqArrays with 2 parameters
function eqArrays(arr1, arr2) {
  // use a loop to go through each array
  for(let i = 0; i < arr1.length; i++) {
    // use if statement to compare the two arrays given.. use [i] to loop through each array
    if(arr1[i] !== arr2[i]) {
      // return false
      console.log("false");
      return false;
    }
  }
  // return true
  console.log("true");
  return true;
};
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false