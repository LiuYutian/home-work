'use strict';
var _ = require('../../array/lodash');
function rank_by_two_large_one_small(collection){

  var array_a = _(collection).rank(function(a,b){
    return a>b;
  }).value();
  var array = [];
  
  var box = 0;
  for (var i = 0; i < array_a.length; i++) {
    array.push(array_a[i]);
    if (i%3===2) {
      box = array[i-2];
      array[i-2] = array[i-1];
      array[i-1] = array[i];
      array[i] = box;
    }
  }
  return array;
}
module.exports = rank_by_two_large_one_small;
