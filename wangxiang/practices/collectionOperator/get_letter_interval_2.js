'use strict';
var _ = require('../../mylodash/array.js');
function get_letter_interval_2(number_a, number_b) {
  return _().range(number_a,number_b).num_map_letter().value();
}
module.exports = get_letter_interval_2;
