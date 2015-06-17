'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    var _ = require('../mylodash/prototype.js');
    var result = [];
    _(collection_a).each(function(item, i) {
        if (!_(collection_b).exist(item).value()) {
            result.push(item);
        }
    });
    return result;
}

module.exports = choose_no_common_elements;
