'use strict';

function amount_even(collection) {
    var _=require("../../../lodash.js");

    var even_result = _(collection).filter(function(n){
        return n%2 === 0;
    }).value();

    return _(even_result).sum().value();
    
}

module.exports = amount_even;
