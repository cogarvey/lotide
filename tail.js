const assertEqual = require('./assertEqual');



const tail = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return array;
  }
  return array.slice(1);
}

module.exports = tail;