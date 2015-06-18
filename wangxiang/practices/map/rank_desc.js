'use strict';
var _ = require('../../mylodash/array.js');
var rank_desc = function(collection){
    var result = _(collection).array_sort(function (a, b) {
        return a > b;
    }).value();
    return result;
};
module.exports = rank_desc;
