'use strict';

function calculate_elements_sum(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).sum().value();
}

module.exports = calculate_elements_sum;
