'use strict';

function get_letter_interval(number_a, number_b) {
    var _=require("../../lodash.js");

    var result =_().range(number_a,number_b).value();
    return  _(result).map(function(n){
        return _().letter(n);
    }).value();
    
}
module.exports = get_letter_interval;
