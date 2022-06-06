const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); // should pass
assertArraysEqual(tail(["Hello", "im", "Colleen"]), ["Hello"]); // should fail
assertArraysEqual(tail([]), []);
assertArraysEqual(tail(["Hello"]), ["Hello"]);