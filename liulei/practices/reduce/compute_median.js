'use strict';

function compute_median(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).bubble_sort(function(item_a, item_b) {
        return item_a > item_b;
    }).get_median().value();
}

module.exports = compute_median;
