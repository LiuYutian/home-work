'use strict';
var _= require('../array/lodash.js');
function choose_no_repeat_number(collection) {
  var array = [];
   _(collection).each(function(item,i){
     if (!_(array).exist(item).value()) {
       array.push(item);
     }
  });

  return array;
}

module.exports = choose_no_repeat_number;
