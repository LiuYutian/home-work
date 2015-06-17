'use strict';

function compute_chain_median(collection) {
    var _ = require('../mylodash/prototype.js');
    var result = collection.split("->");
    _(result).each(function(item, i) {
        result[i] = parseInt(item);
    });
    result = _(result).bubble_sort(function(item_a, item_b) {
        return item_a > item_b;
    }).value();
    return _(result).get_median().value();
}

module.exports = compute_chain_median;
