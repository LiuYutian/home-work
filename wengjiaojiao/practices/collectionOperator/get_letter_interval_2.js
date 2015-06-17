'use strict';
var _ = require("../../mylodash.js");

function get_letter_interval_2(number_a, number_b) {
    return _().range(number_a, number_b).map(function(n) {
        return _.num_to_letter(n);
    });
}

module.exports = get_letter_interval_2;
