'use strict';
var _ = require('../my_lodash/my_lodash.js');

function get_integer_interval_2(number_a, number_b) {

    return _().range(number_a,number_b).filter(function (item,i) {
        return item % 2 === 0;
    }).value();

}

module.exports = get_integer_interval_2;
