'use strict';
var _= require('../array/lodash.js');
function grouping_count(collection) {
  var array = {};
  _(collection).each(function(num,i){
    array[collection[i]] = array[collection[i]] || 0;
    array[collection[i]]++;
  });

  return array;
}

module.exports = grouping_count;
