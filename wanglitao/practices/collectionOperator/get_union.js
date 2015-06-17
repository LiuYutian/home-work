'use strict';

function get_union(collection_a, collection_b) {
    var _ = require('../../lodash.js');

    for(var i = 0; i < collection_b.length; i++) {
        collection_a.push(collection_b[i]);
    }
    return _(collection_a).no_repeat().value();
    
}

module.exports = get_union;
