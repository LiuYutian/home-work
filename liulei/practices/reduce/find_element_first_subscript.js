'use strict';

function calculate_elements_sum(collection, element) {
    var _ = require('../mylodash/prototype.js');
    var subscript;
    var exist = true;
    _(collection).each(function(item, i) {
        if (item === element && exist) {
            subscript = i;
            exist = false;
        }
    });
    return subscript;
}

module.exports = calculate_elements_sum;
