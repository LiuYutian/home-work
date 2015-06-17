'use strict';
//undefined is not a function
function find_first_even(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).filter(function(num) {
        return num % 2 === 0;
    }).first().value();
}

module.exports = find_first_even;
