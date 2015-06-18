'use strict';
var _ = require('../array/lodash');
function collect_max_number(collection) {

  return _(collection).max().value();
}

module.exports = collect_max_number;
