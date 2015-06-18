'use strict';
var _ = require('../../mylodash/array.js');
function choose_divisible_integer(collection_a, collection_b) {

  var result = [];
  _(collection_a).each(function(element_a){
      _(collection_b).each(function(element_b){
          if (element_a%element_b === 0) {
              result.push(element_a);
          }
      });
  });
  return result;
}

module.exports = choose_divisible_integer;
