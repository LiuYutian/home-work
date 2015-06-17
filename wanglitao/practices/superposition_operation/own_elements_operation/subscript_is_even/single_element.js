'use strict';
var single_element = function(collection) {
    var _ =require("../../../../lodash.js");

    var even_result = _(collection).filter(function(n,i){
        return i%2 != 0;
    }).value();

    var temp = {};
    _(even_result).each(function(n,i){
            temp[n+" "] = temp[n+" "]||0;
            temp[n+" "]++;
    });

    var result = [];

    for(var key in temp) {
        if(temp[key] === 1) {
            result.push(parseInt(key));
        }
    }
    return result;
    
}

module.exports = single_element;
