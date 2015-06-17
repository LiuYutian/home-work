'use strict';
var _ = require('../my_lodash/my_lodash.js');

function get_letter_interval_2(number_a, number_b) {
    var result = _().range(number_a,number_b).map(function (num) {
        return _.num_to_letter(num);
    }).value();
    return result;
}

module.exports = get_letter_interval_2;
