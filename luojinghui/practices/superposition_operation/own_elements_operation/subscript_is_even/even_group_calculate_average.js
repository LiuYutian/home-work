'use strict';
var _ = require('../../../chain/prolodash.js');

var even_group_calculate_average = function(collection){
    var temp = {};
    var result = [];

    _(collection).filter(function(n,i) {
        return i % 2 != 0 && n % 2 === 0;
    }).each(function(n) {
        temp[(n + '').length] = temp[(n + '').length] || [];
        temp[(n + '').length].push(n);
    });

    for(var key in temp) {
        var sum = 0;
        _(temp[key]).each(function(n) {
            sum += n;
        });
        result.push(sum / temp[key].length);
    }
    return result.length === 0 ? [0] : result;

};
module.exports = even_group_calculate_average;
