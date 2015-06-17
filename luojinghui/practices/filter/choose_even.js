'use strict';
var _ = require('../chain/prolodash.js');

function choose_even(collection) {
    return _(collection).filter(function(n,i) {
        if(n % 2 === 0) {
            return true;
            }
        }).value();
}

module.exports = choose_even;
