'use strict';
var _= require('../array/lodash.js');
function choose_common_elements(collection_a, collection_b) {
  var array = [];
  _(collection_a).each(function(item,i){
    if (_(collection_b).exist(item).value()) {
      array.push(item);
    }
  });

  return array;
}

module.exports = choose_common_elements;
