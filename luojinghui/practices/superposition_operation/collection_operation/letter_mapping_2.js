'use strict';
var _ = require('../../chain/prolodash.js');

function average_to_letter(collection) {
    return _().num_change_letter(Math.ceil(_(collection).reduce(function(a,b) {
        return a + b;
    }).value()/collection.length));
}

module.exports = average_to_letter;
