'use strict';

function hybrid_operation(collection) {
    var _= require("../../../lodash.js");

    var result = _(collection).map(function(n){
        return n*3+2;
    }).value();

    return _(result).sum().value();
    
}

module.exports = hybrid_operation;
