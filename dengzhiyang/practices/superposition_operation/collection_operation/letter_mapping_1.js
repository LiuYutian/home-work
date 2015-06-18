'use strict';

function even_to_letter(collection) {
  var _ = require('../../array/lodash');
  var array = [];
  _(collection).each(function(num,i){
    if (num%2===0) {
      array.push(String.fromCharCode(num+96));
    }
  });

  return array;
}

module.exports = even_to_letter;
