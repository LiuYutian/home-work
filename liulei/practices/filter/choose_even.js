'use strict';

function choose_even(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).filter(function(num) {
        return num % 2 === 0;
    }).value();
}

module.exports = choose_even;
