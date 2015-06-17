'use strict';
var _ = require("../../../../mylodash.js");

var calculate_median = function(collection){
    return _(collection).filter(function(n, i) {
        return i % 2 ===0;
    }).median().value();
}
module.exports = calculate_median;
