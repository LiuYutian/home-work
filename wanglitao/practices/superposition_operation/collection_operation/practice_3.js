'use strict';

function hybrid_operation_to_uneven(collection) {
    var _=require("../../../lodash.js");

    var result =_(collection).filter(function(n,i){
        return n%2 != 0;
    }).value();

    var array=_(result).map(function(n){
        return n*3+5;
    }).value();

    var sum =  _(array).reduce(function(a,b){
        return a+b;
    }).value();
    
    return sum;
}
module.exports = hybrid_operation_to_uneven;
