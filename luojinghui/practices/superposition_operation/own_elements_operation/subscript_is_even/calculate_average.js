'use strict';
var _ = require('../../../chain/prolodash.js');

var calculate_average = function(collection){
    var even = 1;

    return _(collection).filter(function(n,i) {
        return i % 2 != 0;
    }).reduce(function(a,b) {
        even += 1;
        return a + b;
    }).value()/even;
};
module.exports = calculate_average;
