'use strict';
var _ = require('../../../array/lodash');
var even_group_calculate_average = function(collection){
  var array = [];
  var func = {};
  var array_a = [];
  array = _(collection).filter(function(coll,i){
    return i%2===1&&coll%2===0;
  }).value();

  _(array).each(function(num,i){
      func[array[i].toString().length] = func[array[i].toString().length] || [];
      func[array[i].toString().length].push(array[i]);
  });
  for (var key in func){
    array_a.push(_(func[key]).mean().value());
  }
  return array_a.length===0?[0]:array_a;

};
module.exports = even_group_calculate_average;
