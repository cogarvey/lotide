const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const { assert } = require('chai');


// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

describe('#middle', () => {
  it("should return [2, 3] when passed [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [2] when passed [1, 2, 3] ", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [] when passed [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return [3], when passed [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});