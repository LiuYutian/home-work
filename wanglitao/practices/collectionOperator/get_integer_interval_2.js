'use strict';

function get_integer_interval_2(number_a, number_b) {
    var _ = require("../../lodash.js");

    var even_result = _().range(number_a,number_b).value();

    return _(even_result).filter(function(n,i){
        return n%2 === 0;
    }).value();

}

module.exports = get_integer_interval_2;
