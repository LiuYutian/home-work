'use strict';
var _ = require('../array/lodash');
function collect_min_number(collection) {
  return _(collection).min().value();

}

module.exports = collect_min_number;
