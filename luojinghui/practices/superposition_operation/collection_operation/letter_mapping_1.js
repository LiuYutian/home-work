'use strict';
var _ = require('../../chain/prolodash.js');

function even_to_letter(collection) {
    return _(collection).filter(function(n) {
        return n % 2 === 0 ;
    }).map(function(n) {
        return _().num_change_letter(n);
    }).value();
}

module.exports = even_to_letter;
