'use strict';
var even_group_calculate_average = function(collection) {
    var _ = require('../../../mylodash/prototype.js');
    var array = _(collection).filter(function(item, i) {
        return i % 2 === 1 && item % 2 === 0;
    }).value();
    var result = [];
    var result_even = {};
    _(array).each(function(item, i) {
        result_even[(item + '').length] = result_even[(item + '').length] || [];
        result_even[(item + '').length].push(item);
    });
    for (var key in result_even) {
        var sum = 0;
        for (var x = 0; x < result_even[key].length; x++) {
            sum += result_even[key][x];
        }
        result[result.length] = Math.ceil(sum / result_even[key].length);
    }

    return result.length === 0 ? [0] : result;
};
module.exports = even_group_calculate_average;
