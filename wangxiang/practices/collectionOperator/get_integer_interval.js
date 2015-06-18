'use strict';
var _ = require('../../mylodash/array.js');
function get_integer_interval(number_a, number_b) {
  return _().range(number_a,number_b).value();
}
module.exports = get_integer_interval;
