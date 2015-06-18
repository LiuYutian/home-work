'use strict';
var _ = require('../../mylodash/array.js');
function get_integer_interval_2(number_a, number_b) {
return _().range(number_a,number_b).filter(function (element) {
      return element%2 === 0;
  }).value();
}

module.exports = get_integer_interval_2;
