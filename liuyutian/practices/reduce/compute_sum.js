'use strict';

var _ = require('../../myLodash.js');
function calculate_elements_sum(collection) {
    return _(collection).reduce(function(a, b) {
        return a + b;
    });
}

module.exports = calculate_elements_sum;
