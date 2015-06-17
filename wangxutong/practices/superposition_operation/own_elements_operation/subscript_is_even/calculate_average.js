'use strict';
var _ = require('../../../my_lodash/my_lodash.js');

var calculate_average = function(collection){
    var result = _(collection).filter(function (item,i) {
        return i % 2 === 1;
    }).value();
    var sum = _(result).sum().value();
    return sum / result.length;
};
module.exports = calculate_average;
