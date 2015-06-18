'use strict';
function one_add_next_multiply_three(collection){

  var array = [];
  for (var i = 0; i < collection.length-1; i++) {
      array.push((collection[i]+collection[i+1])*3);
  }
  return array;
}
module.exports = one_add_next_multiply_three;
