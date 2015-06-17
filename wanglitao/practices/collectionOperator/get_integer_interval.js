'use strict';

function get_integer_interval(number_a, number_b) {
    var _ = require("../../lodash.js");

    return _().range(number_a,number_b).value();
    
}

module.exports = get_integer_interval;
