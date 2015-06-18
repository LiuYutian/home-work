'use strict';
var _ = require('../../../array/lodash');
var single_element = function(collection){
  var array = [];
  var array_a = [];
  array = _(collection).filter(function(num,i){
    return i%2===1;
  }).value();
  return rtdetr(array);

};
module.exports = single_element;


function rtdetr(collection){
  var array_a = [];
  for (var i = 0; i < collection.length; i++) {
    var judge = true;
    for (var j = 0; j < collection.length; j++) {
      if (collection[i]===collection[j]&&i!==j) {
        judge = false;
        break;
      }
    }
    if (judge) {
      array_a.push(collection[i]);
    }
  }
  return array_a;
}
