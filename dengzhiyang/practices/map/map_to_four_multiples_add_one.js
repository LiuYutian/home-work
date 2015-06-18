'use strict';
var _= require('../array/lodash.js');

var map_to_four_multiples_add_one = function(collection){

  return _(collection).map(function(number){
    return number * 4 + 1;
  }).value();
};

module.exports = map_to_four_multiples_add_one;
