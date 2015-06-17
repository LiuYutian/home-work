'use strict';
var _ = require("../../../mylodash.js");
var even_asc_odd_desc = function(collection){
    var odd = _(collection).filter(function(n) {
        return n % 2 != 0;
    }).rank(function(a, b) {
        return a < b;
    }).value();
    var even = _(collection).filter(function(n) {
        return n % 2 === 0;
    }) .rank(function(a, b) {
        return a > b;
    }).value();
    _(odd).each(function(n) {
        even.push(n);
    });
    return even;
};

module.exports = even_asc_odd_desc;
