// // ASSERT EQUALS
const assertEqual = function(actual, expexted) {
  if (actual === expexted) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expexted}`);
  }
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expexted}`);
};

// EQUAL OBJECTS
const eqObjects = function(obj1, obj2) {
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (let i = 0; i < obj1.length; i++) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); 

