'use strict';
var _ = require('../array/lodash');
function compute_average(collection) {

  return _(collection).mean().value();
}

module.exports = compute_average;
