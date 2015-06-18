'use strict';
var _= require('../array/lodash.js');
function get_intersection(collection_a, collection_b) {
  var collection = [];
  _(collection_b).each(function(item,i){
    if (_(collection_a).exist(item).value()) {
      collection[collection.length] = item;
    }
  });
  
  return collection;
}

module.exports = get_intersection;
