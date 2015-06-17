'use strict';

function calculate_elements_sum(collection, element) {
    var _ = require('../mylodash/prototype.js');
    var subscript;
    _(collection).each(function(item, i) {
        if (item === element) {
            subscript = i;
        }
    });
    return subscript;
}

module.exports = calculate_elements_sum;
