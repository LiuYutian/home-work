'use strict';

function double_to_one(collection) {
  var _= require('../array/lodash.js');
  var array=[];
  _(collection).each(function(num,i){
    if (num.length===undefined) {
      array.push(num);
    }
    _(num).each(function(num,i){
      if (num.length===undefined) {
        array.push(num);
      }
    });
  });


  return array;
}

module.exports = double_to_one;
