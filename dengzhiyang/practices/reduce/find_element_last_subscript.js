'use strict';
var _ = require('../array/lodash');
function calculate_elements_sum(collection, element) {
  var number = 0;
  _(collection).each(function(num,i){
    if (element===num) {
      number = i;
    }
  });
  return number;
}

module.exports = calculate_elements_sum;
