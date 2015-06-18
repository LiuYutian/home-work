'use strict';
var _ = require('../array/lodash');
function compute_chain_median(collection) {
  var array = [];
  array = collection.split('->');
  for (var i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }
   array = _(array).rank(function(a,b){
     return a>b;
   }).value();
   return _(array).median().value();
}

module.exports = compute_chain_median;

function median(){

}
