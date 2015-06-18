'use strict';
var _ = require('../../array/lodash');
function amount_even(collection) {

  var array = _(collection).filter(function(num){
    return num%2===0;
  }).value();
  return _(array).sum().value();
}

module.exports = amount_even;
