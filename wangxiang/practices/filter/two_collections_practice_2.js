'use strict';
var _ = require('../../mylodash/array.js');
function choose_no_common_elements(collection_a, collection_b) {
    return _(collection_a).repeat(collection_b).value()
}

module.exports = choose_no_common_elements;
