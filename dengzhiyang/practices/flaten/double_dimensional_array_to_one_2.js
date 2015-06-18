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

  return duplicate(array);
}

module.exports = double_to_one;

function duplicate(array){
  var decide = false;
  var collection_a = [];
  for (var i = 0; i < array.length; i++) {
    for (var x = 0; x < collection_a.length; x++) {
      if (array[i]===collection_a[x]) {
        decide = true;
      }
    }
    if (!decide) {
      collection_a.push(array[i]);
    }
    decide = false;
  }
  return collection_a;
}
