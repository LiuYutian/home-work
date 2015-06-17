'use strict';
function one_add_next_multiply_three(collection){
    var _ = require("../../../lodash.js");
    var result = [];

    _(collection).each(function(n,i){
        if(i  < collection.length-1) {
            result.push((n + collection[i+1])*3);
        }
    });

    return result;
    
 }
 module.exports = one_add_next_multiply_three;
