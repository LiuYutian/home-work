'use strict';
var _ = require('../../mylodash/array.js');
function grouping_count(collection) {
  return _(collection).num_group(function (element) {
      return element;
  }).value();
}

module.exports = grouping_count;
