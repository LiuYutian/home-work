'use strict';
var _ = require ('../array/lodash');
var number_map_to_word = function(collection){

  return _(collection).map(function(num){
    return String.fromCharCode(num+96);
  }).value();
};

module.exports = number_map_to_word;
