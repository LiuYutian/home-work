'use strict';
var _ =require('../array/lodash');
function calculate_elements_sum(collection) {
  return _(collection).sum().value();

}

module.exports = calculate_elements_sum;
