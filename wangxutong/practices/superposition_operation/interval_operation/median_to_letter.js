'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function median_to_letter(collection) {
    var median = _(collection).bubble_sort(function (item_a,item_b) {
        return item_a > item_b;
    }).get_median().value();
    median = Math.ceil(median);
    return _().num_to_letter(median).value();
}

module.exports = median_to_letter;
