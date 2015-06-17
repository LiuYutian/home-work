'use strict';

function find_last_even(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).filter(function(num) {
        return num % 2 === 0;
    }).last().value();
}

module.exports = find_last_even;
