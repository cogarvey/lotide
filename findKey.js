// ASSERT EQUALS
const assertEqual = function(actual, expexted) {
  if (actual === expexted) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expexted}`);
  }
  
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expexted}`);
};

// FIND KEY
const findKey = function(object, callback) {
  let keys = Object.keys(object);
  // console.log(object);
  for (let i = 0; i < keys.length; i++) {
    // console.log(keys[i], callback(object[keys[i]], object[keys[i]].stars));
    if (callback(object[keys[i]])) {
     return keys[i];
    }
  }
  return undefined;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"

let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

let test = findKey(object, x => x.stars > 2);
let testSubject = "Akaleri";
assertEqual(test, testSubject); // should pass

let test2 = findKey(object, x => x.stars > 4);
let testSubject2 = undefined;
assertEqual(test2, testSubject2); // should pass

let test3 = findKey(object, x => x.stars === 6);
let testSubject3 = "Ora";
assertEqual(test3, testSubject3); // should fail

module.exports = findKey;