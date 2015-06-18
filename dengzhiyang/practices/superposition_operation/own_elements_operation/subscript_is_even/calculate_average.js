'use strict';
var _ = require('../../../array/lodash');
var calculate_average = function(collection){
  var array = _(collection).filter(function(num,i){
    return i%2===1;
  }).value();
  return _(array).mean().value();

};
module.exports = calculate_average;
