'use strict';
var _ = require('../../../../mylodash/array.js');
var calculate_median = function(collection){
    var result = 0;
    var array = [];
    _(collection).each(function(element){
        array.push(element);
    });
    result = _(array).array_sort(function (a,b) {
        return a > b;
    }).cal_median();
    return result;


};
module.exports = calculate_median;
