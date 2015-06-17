'use strict';

function get_integer_interval(number_a, number_b) {
    var _ = require('../../myLodash.js');

    return _(number_a).range(number_b);
}

module.exports = get_integer_interval;
