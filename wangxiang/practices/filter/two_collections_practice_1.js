'use strict';
var _ = require('../../mylodash/array.js');
function choose_common_elements(collection_a, collection_b) {
  return _(collection_a).no_repeat(collection_b).value();
}

module.exports = choose_common_elements;
