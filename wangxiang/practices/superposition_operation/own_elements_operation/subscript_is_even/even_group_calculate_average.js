'use strict';
var _ = require('../../../../mylodash/array.js');
var even_group_calculate_average = function(collection){
        var result_array = [];
        _(collection).filter(function(element, i){
            return (i+1)%2 === 0 && element %2 === 0;
        }).group(function (element,i) {
            return (element+'').length;
        }).values(function (value) {
            result_array.push(_(value).average())
        });
        return result_array.length ===0 ? [0] : result_array;
};
module.exports = even_group_calculate_average;
