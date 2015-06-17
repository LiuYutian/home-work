'use strict';

function spilt_to_zero(num_a,num_b) {
    var result = [];
    result[result.length] = num_a;
    for (; num_a > 0;) {
        num_a = parseFloat((num_a - num_b).toFixed(1));
        result[result.length] = num_a;
    }
    return result;
}

module.exports = spilt_to_zero;
