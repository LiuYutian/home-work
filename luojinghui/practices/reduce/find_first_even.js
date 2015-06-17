'use strict';
var _ = require('../chain/prolodash.js');

function find_first_even(collection) {
    return _(collection).filter(function(n) {
        return n % 2 === 0;
    }).reduce(function(a,b) {
        return a;
    }).value();
}

module.exports = find_first_even;