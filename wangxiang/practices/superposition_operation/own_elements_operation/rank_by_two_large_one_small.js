'use strict';
var _ = require('../../../mylodash/array.js');

function rank_by_two_large_one_small(collection){
  var result = [];
  _(collection).each(function (element) {
      result.push(element);
  });
  result = _(result).array_sort(function (a, b) {
      return a > b;
  }).value();
  for (var i = 0; i < result.length; i++) {
      if (i%3 === 2) {
          var temp = result[i-2];
          result[i-2] = result[i-1];
          result[i-1] = result[i];
          result[i] = temp;
      }
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
