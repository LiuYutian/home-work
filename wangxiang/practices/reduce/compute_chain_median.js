'use strict';
var _ = require('../../mylodash/array.js');
function compute_chain_median(collection) {
  var split_array = collection.split('->');
  var result = [];
  _(split_array).each(function(element){
      result.push(Number(element));
  });
  var median_num = _(result).array_sort(function (a, b) {
      return a > b;
  }).cal_median();
  return median_num;
}
module.exports = compute_chain_median;
