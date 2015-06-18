'use strict';
var _ = require('../../array/lodash');
function average_uneven(collection) {

  var array = _(collection).filter(function(num){
    return num%2===1;
  }).value();
  return _(array).sum().value()/array.length;
}

module.exports = average_uneven;
