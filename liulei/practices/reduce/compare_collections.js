'use strict';

function compare_collections(collection_a, collection_b) {
    var _ = require('../mylodash/prototype.js');
    if (collection_a.length !== collection_b.length || collection_a.length === 0) {
        return false;
    }
    var result = true;
    _(collection_a).each(function(item, i) {
        if (item !== collection_b[i]) {
            result = false;
        }
    });
    return result;
}

module.exports = compare_collections;
