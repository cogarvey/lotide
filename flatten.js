// create a function with eqArrays with 2 parameters
function eqArrays(arr1, arr2) {
  // use a loop to go through each array
  for(let i = 0; i < arr1.length; i++) {
    // use if statement to compare the two arrays given.. use [i] to loop through each array
    if(arr1[i] !== arr2[i]) {
      // return false
      return false;
    }
  }
  // return true;
  return true;
};

function assertArraysEqual(array1, array2) {
  // refer to previous eqArrays function to console log message
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
};

function flatten() {

}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]