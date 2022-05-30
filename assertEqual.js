const assertEqual = function(actual, expexted) {
  if (actual === expexted) {
    console.log("✅✅✅ Assertion Passed:" + actual + " === " + expexted);
  } else {
    console.log("🛑🛑🛑 Assertion Failed:" + actual + " !== " + expexted);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("one", 1);