const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), true) // => false

assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), true) // => false