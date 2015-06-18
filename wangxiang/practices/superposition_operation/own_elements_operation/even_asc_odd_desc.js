'use strict';
var _ = require('../../../mylodash/array.js');

var even_asc_odd_desc = function(collection){
    var even_array = [];
    var compute_array = [];
    _(collection).each(function (element) {
        if (element%2 === 0) {
            even_array.push(element);
        }else{
            compute_array.push(element);
        }
    });
    even_array = _(even_array).array_sort(function (a,b) {
        return a > b;
    }).value();
    compute_array = _(compute_array).array_sort(function (a,b) {
        return a < b;
    }).value();
    return even_array.concat(compute_array);
};
module.exports = even_asc_odd_desc;
