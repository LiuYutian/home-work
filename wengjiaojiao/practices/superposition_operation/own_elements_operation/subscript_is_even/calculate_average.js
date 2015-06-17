'use strict';
var _ = require("../../../../mylodash.js");

var calculate_average = function(collection){
    var aver = _(collection).filter(function(n, i) {
        return (i + 1) % 2 ===0
    }).value();
     return _(aver).sum().value() / aver.length;
}



module.exports = calculate_average;
