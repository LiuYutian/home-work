
'use strict';
var _ = require('../chain/prolodash.js');

function get_integer_interval(number_a, number_b) {
    return _(number_a).range(number_b).value();
}
module.exports = get_integer_interval;
