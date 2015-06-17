'use strict';
var calculate_average = function(collection) {
    var _ = require('../../../mylodash/prototype.js');
    var result = _(collection).filter(function(item, i) {
        return i % 2 === 1;
    }).value();
    var sum = _(result).sum().value();
    return sum / result.length;
};
module.exports = calculate_average;
