'use strict';
var _ = require('../array/lodash');
function find_last_even(collection) {
  var number;
  _(collection).each(function(num){
    if (num%2===0) {
      number = num;
    }
  });
  return number;
}

module.exports = find_last_even;
