'use strict';
var _ = require('../../mylodash/array.js');
function collect_min_number(collection) {
  var result = _(collection).min();
  return result;
}
module.exports = collect_min_number;
