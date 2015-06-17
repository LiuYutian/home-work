'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function rank_by_two_large_one_small(collection){
    var result = [];
    result = _(collection).bubble_sort(function (item_a,item_b) {
        return item_a > item_b;
    }).value();

    _(result).each(function (item,i) {
        if (i % 3 === 2) {
            var num  = result[i - 2];
            result[i - 2] = result[i - 1];
            result[i - 1] = result[i];
            result[i] = num;
        }
    });
    return result;
}
module.exports = rank_by_two_large_one_small;
