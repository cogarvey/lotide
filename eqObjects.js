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


// // ASSERT EQUALS
const assertEqual = function(actual, expexted) {
  if (actual === expexted) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expexted}`);
  }
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expexted}`);
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false