'use strict';
var _ = require('../../chain/prolodash.js');

function average_uneven(collection) {
    var count = 1;

     return _(collection).filter(function(n) {
        return n % 2 != 0 ;
    }).reduce(function(a,b) {
        count += 1;
        return a + b;
    }).value()/count;
}

module.exports = average_uneven;
