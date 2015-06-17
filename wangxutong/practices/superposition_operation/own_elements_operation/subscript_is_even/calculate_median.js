'use strict';
var _ = require('../../../my_lodash/my_lodash.js');
var calculate_median = function(collection){
    var result = [];
    _(collection).each(function (item,i) {
        if (i % 2 === 1) {
            result.push(item);
        }
    });
    return _(result).bubble_sort(function (item_a,item_b) {
        return item_a > item_b;
    }).get_median().value();
};
module.exports = calculate_median;
