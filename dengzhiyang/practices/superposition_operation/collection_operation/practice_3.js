'use strict';
var _ = require('../../array/lodash');
function hybrid_operation_to_uneven(collection) {

  var array = _(collection).filter(function(num){
    return num%2===1;
  }).value();
  return _(array).sum().value()*3+array.length*5;
}

module.exports = hybrid_operation_to_uneven;
