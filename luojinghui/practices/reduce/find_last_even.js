'use strict';
var _ = require('../chain/prolodash.js');

function find_last_even(collection) {
    return _(collection).filter(function(n) {
        return n % 2 === 0;
    }).reduce(function(a,b) {
        return b;
    }).value();
}

module.exports = find_last_even;
