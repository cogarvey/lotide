// EQUAL ARRAYS
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



// EQUAL OBJECTS
const eqObjects = function(object1, object2) {
  const object1KeysArray = Object.keys(object1);
  const object2KeysArray = Object.keys(object2);
  let result = object1KeysArray.length === object2KeysArray.length;
  if (result) {
    for (let key1 of object1KeysArray) {
      for (let key2 of object2KeysArray) {
        if (eqArrays(object1[key1], object2[key2]) && eqArrays(key1, key2)) {
          result = true;
          break;
        } else {
          result = false;
        }
      }
    }
  }
  return result;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false

module.exports = assertObjectsEqual;