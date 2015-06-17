'use strict';
var _  =require('../../mylodash.js');

function find_last_even(collection) {
    return _(collection).filter(function(n) {
        return n % 2 === 0;
    }).last().value();
}
module.exports = find_last_even;
