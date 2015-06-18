'use strict';
var _ = require('../../mylodash/array.js');
var rank_asc = function(collection) {
    var asc_array = [];
    asc_array = _(collection).array_sort(function (a, b) {
        return  a < b;
    }).value();
    return asc_array;
};
module.exports = rank_asc;
