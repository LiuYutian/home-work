'use strict';
var _ = require('../../array/lodash');
var even_asc_odd_desc = function(collection){
  var array = [];
  var array_a = _(collection).rank(function(a,b){
    return a>b;
  }).value();

  for (var i = 0; i < array_a.length; i++) {
    if (array_a[i]%2===0) {
      array.push(array_a[i]);
    }
  }
  for ( i = array_a.length-1; i >= 0; i--) {
    if (array_a[i]%2!==0) {
      array.push(array_a[i]);
    }
  }
  return array;
};
module.exports = even_asc_odd_desc;
