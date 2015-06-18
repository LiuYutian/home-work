'use strict';
var _ = require('../array/lodash');
var number_map_to_word_over_26 = function(collection){

  return _(collection).map(function(num){
    var quotient,remainder;
    quotient = parseInt(num/26);
    remainder = num%26;
    if (remainder===0) {
      quotient = quotient-1;
      remainder = 26;
    }
    if (quotient===0) {
      return String.fromCharCode(remainder+96);
    }else {
      return String.fromCharCode(quotient+96) + String.fromCharCode(remainder+96);
    }
  }).value();
};

module.exports = number_map_to_word_over_26;
