'use strict';
var _= require('../array/lodash.js');
function get_union(collection_a, collection_b) {

  var collection = collection_a;
  _(collection_b).each(function(item,i){
    if (!_(collection_a).exist(item).value()) {
      collection[collection.length] = item;
    }
  });

  return collection;

}

module.exports = get_union;
