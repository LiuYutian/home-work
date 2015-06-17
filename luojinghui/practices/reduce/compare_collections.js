'use strict';
var _ = require('../chain/prolodash.js');

function compare_collections(collection_a, collection_b) {
    if(collection_a.length != collection_b.length) {
        return false;
    }

    var index = true;
    _(collection_a).each(function(n,i) {
            if(collection_b[i] != n) {
                index = false;
        }
    })
    return index;
}

module.exports = compare_collections;
