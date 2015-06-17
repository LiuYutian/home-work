'use strict';
var _ = require('../chain/prolodash.js');

function choose_common_elements(collection_a, collection_b) {
    return _(collection_a).intersection(collection_b).value();
}

module.exports = choose_common_elements;
