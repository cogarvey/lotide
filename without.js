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
// create a function without, with 2 parameters given
function without(source, itemsToRemove) {
  // loop through both parameters
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      // check if both parameters match eachother completely
      if (source[i] === itemsToRemove[j]) {
        // remove source[i] with splice from the 1st index of the array
        source.splice(i, 1);
      }
    }
  }
  // return source
  return source;
}

assertArraysEqual(without([1,2,3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// assertArraysEqual([1,2,3,4],[1,2,3,4]);
// assertArraysEqual([4,3,2,1],[1,2,3,4]);
