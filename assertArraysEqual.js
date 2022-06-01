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

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false