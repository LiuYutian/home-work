'use strict';
var _ = require('../array/lodash');
function find_first_even(collection) {
  var number;
  var estimate = true;
  _(collection).each(function(num){
    if (num%2===0&&estimate) {
      number = num;
      estimate = false;
    }
  });
  return number;
}

module.exports = find_first_even;
