'use strict';
var _ =require('../array/lodash');
function calculate_elements_sum(collection, element) {
  var number = 0;
  var estimate = true;
  _(collection).each(function(num,i){
    if (element===num && estimate) {
      number = i;
      estimate = false;
    }
  });
  return number;
}

module.exports = calculate_elements_sum;
