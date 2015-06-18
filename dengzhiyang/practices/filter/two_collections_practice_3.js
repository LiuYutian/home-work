'use strict';
var _= require('../array/lodash.js');
function choose_divisible_integer(collection_a, collection_b) {
  var collection = [];
  _(collection_a).filter(function(num_a){
    _(collection_b).each(function(num_b){
      if (num_a % num_b===0) {
        collection.push(num_a);
      }
    });
  }).value();
  return collection;

}

module.exports = choose_divisible_integer;
