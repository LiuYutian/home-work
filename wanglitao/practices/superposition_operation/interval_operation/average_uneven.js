'use strict';

function average_uneven(collection) {
    var _=require("../../../lodash.js");
    var count = 0;

    var odd_result = _(collection).filter(function(n,i){
        return n%2 != 0;
    }).value();

    var sum = _(odd_result).sum().value();
    
    return sum/odd_result.length;

}

module.exports = average_uneven;
