'use strict';
var _ = require('../../mylodash/array.js');
function collect_max_number(collection) {
  var result = _(collection).max();
  return result;
}
module.exports = collect_max_number;
