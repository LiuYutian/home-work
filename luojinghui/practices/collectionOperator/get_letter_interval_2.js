'use strict';
var _ = require('../chain/prolodash.js');

function get_letter_interval_2(number_a, number_b) {
    return _(number_a).range(number_b).map(function(n) {
        return _().num_change_letter(n);
    }).value();
}

module.exports = get_letter_interval_2;
