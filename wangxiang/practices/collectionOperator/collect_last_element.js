'use strict';
var _ = require('../../mylodash/array.js')
function collect_last_element(collection) {
  return _(collection).last();
}

module.exports = collect_last_element;
