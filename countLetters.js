// ASSERT EQUALS
const assertEqual = function(actual, expexted) {
  if (actual === expexted) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expexted}`);
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expexted}`);
};

const countLetters = function(string) {
  let letters = {};
  // loop through string
  for (let letter of string) {
    // removes the spaces of the string
    if (letter !== ' ') {
      // if letter is captured, add 1 to our count
      if (letters[letter]) {
        letters[letter] += 1;
      // if the letter doesnt exist in our our count, it creates it
      } else {
        letters[letter] = 1;
      }
    }
  }
  // return the result
  return letters;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;