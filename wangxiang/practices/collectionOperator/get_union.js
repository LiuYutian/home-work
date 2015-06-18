'use strict';
var _ = require('../../mylodash/array.js');
function get_union(collection_a, collection_b) {

  var result = [];
  var a_array = [];
  _(collection_a).each(function(element){
      a_array.push(element);
  });
  return  a_array.concat(_(collection_b).filter(function (element) {
       return !_(collection_a).exist(element);
   }).value());
}

module.exports = get_union;
