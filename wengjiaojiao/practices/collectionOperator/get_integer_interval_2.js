'use strict';
var _ = require('../../mylodash.js');
function get_integer_interval_2(number_a, number_b) {
    return _().range(number_a, number_b).filter(function(n) {
        return n % 2 ===0;
    });
}


module.exports = get_integer_interval_2;
