'use strict';
var _ = require('../../../mylodash.js');

function even_to_letter(collection) {
    return _(collection).filter(function(n) {
        return n % 2 ===0
    }).map(function(n) {
        return _.num_to_letter(n);
    }).value();
}

module.exports = even_to_letter;
