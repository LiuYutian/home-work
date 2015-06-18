'use strict';
var _ = require('../../array/lodash');
function hybrid_operation(collection) {

  return _(collection).sum().value()*3 + collection.length*2;
}

module.exports = hybrid_operation;
