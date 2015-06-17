'use strict';
var _ = require('../my_lodash/my_lodash.js');

function compute_median(collection) {
    return _(collection).bubble_sort(function (item_a,item_b) {
        return item_a > item_b;
    }).get_median().value();
}

module.exports = compute_median;
