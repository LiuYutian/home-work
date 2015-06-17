'use strict';
var _  =require('../../mylodash.js');

function find_first_even(collection) {
    return _(collection).filter(function(n) {
        return n % 2 === 0;
    }).first().value();
}


module.exports = find_first_even;
