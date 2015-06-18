'use strict';
var _ = require('../../mylodash/array.js');
function get_intersection(collection_a, collection_b) {
  var result = [];
  _(collection_b).each(function(element){
      if (_(collection_a).exist(element)) {
          result.push(element);
      }
  });
  return result;
}

module.exports = get_intersection;
