'use strict';

function get_intersection(collection_a, collection_b) {
    var _ = require('../mylodash/prototype.js');
    var result = [];
    _(collection_b).each(function(item, i) {
        if (_(collection_a).exist(item).value()) {
            result.push(item);
        }
    });
    return result;
}

module.exports = get_intersection;
