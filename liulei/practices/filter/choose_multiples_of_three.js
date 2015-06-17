'use strict';

function choose_multiples_of_three(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).filter(function(num) {
        return num % 3 === 0;
    }).value();
}

module.exports = choose_multiples_of_three;
