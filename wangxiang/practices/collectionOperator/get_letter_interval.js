'use strict';
var _ = require('../../mylodash/array.js');
function get_letter_interval(number_a, number_b) {
  return _().range(number_a,number_b).get_charcode().value();
}
module.exports = get_letter_interval;
