'use strict';
var _ = require('../../mylodash.js');
function get_letter_interval(number_a, number_b) {

    return _().range(number_a, number_b).value().map(function(n){
        return _.num_to_letter(n);
    });
}


module.exports = get_letter_interval;
