'use strict';
function get_letter_interval_2(number_a, number_b) {
    var _ = require("../../lodash.js");

    var array = _().range(number_a,number_b).value();

    return  _(array).map(function(n){
        return _().letter(n);
    }).value();
    
}
module.exports = get_letter_interval_2;
