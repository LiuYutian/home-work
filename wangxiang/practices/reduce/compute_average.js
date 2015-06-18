'use strict';
var _ = require('../../mylodash/array.js');
function compute_average(collection) {
  var average = _(collection).average();
  return average;
}
module.exports = compute_average;
