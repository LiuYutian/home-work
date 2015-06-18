'use strict';
var _ = require('../array/lodash');
function compute_median(collection) {
  var array = _(collection).rank(function(a,b){
    return a>b;
  }).value();
  return _(array).median().value();
}

module.exports = compute_median;
