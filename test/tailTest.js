const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');
const { assert } = require('chai');


describe('#tail', () => {
  it("should return ['Lighthouse', 'Labs'] when passed ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("should return ['Im', 'Colleen'] when passed ['Hello', 'Im', 'Colleen'] ", () => {
    assert.deepEqual(tail(['Hello', 'Im', 'Colleen']), ['Im', 'Colleen']);
  });
  it("should return [] when passed []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("should return ['Hello], when passed ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), ['Hello']);
  });
});