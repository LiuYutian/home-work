'use strict';
var _ = require('../chain/prolodash.js');

function get_union(collection_a, collection_b) {
    return _(collection_a).concat(collection_b).no_repeat().value();
}
module.exports = get_union;
