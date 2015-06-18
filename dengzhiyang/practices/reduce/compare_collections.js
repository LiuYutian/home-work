'use strict';
var _= require('../array/lodash.js');
function compare_collections(collection_a, collection_b) {

  var array = true;
  _(collection_a).each(function(num,i){
    if (collection_a.length===collection_b.length&&collection_a[i]!==collection_b[i]) {
      array = false;  
    }
  });
  return array;
}

module.exports = compare_collections;
