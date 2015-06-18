'use strict';
var _= require('../array/lodash.js');

function map_to_even(collection){

  return _(collection).map(function(number){
    return number * 2;
  }).value();

}
module.exports = map_to_even;
