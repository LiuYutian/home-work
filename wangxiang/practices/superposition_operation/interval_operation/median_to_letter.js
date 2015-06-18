'use strict';
var _ = require('../../../mylodash/array.js');
function median_to_letter(collection) {
    var array = [];
    _(collection).each(function (element) {
        array.push(element);
    });
    var result = Math.ceil(_(array).array_sort(function (a, b) {
        return a > b;
    }).cal_median());
    var result_median = _().get_num_map_letter(result).value();
    return result_median;

}

module.exports = median_to_letter;
