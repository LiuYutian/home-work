'use strict';
var _ = require('../../mylodash/array.js');
function calculate_elements_sum(collection) {
  var sum = _(collection).sum();
  return sum;
}
module.exports = calculate_elements_sum;
