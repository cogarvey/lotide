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

function head(array) {
  return array[0];
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");