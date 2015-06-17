'use strict';

function hybrid_operation_to_uneven(collection) {
    var _= require("../../../lodash.js");

    var result= _(collection).filter(function(n,i){
        return n%2 != 0
    }).value();

    var output = _(result).map(function(n){
        return   n*3+2;
    }).value();

     return output;
     
}

module.exports = hybrid_operation_to_uneven;
