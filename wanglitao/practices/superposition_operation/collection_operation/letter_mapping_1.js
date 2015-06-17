'use strict';

function even_to_letter(collection) {
    var _= require("../../../lodash.js");

    var even_result = _(collection).filter(function(n){
        if(n%2 === 0){
            return n;
        }
    }).value();

    return _(even_result).map(function(n){
        return _().letter(n);
    }).value();
    
}

module.exports = even_to_letter;
