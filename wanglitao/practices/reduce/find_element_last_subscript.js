'use strict';

function calculate_elements_sum(collection, element) {
    var _= require("../../lodash.js");
    var index = -1;

    _(collection).each(function(n,i){
        if(n === element) {
            index = i;
        }
    });
    
    return index;
}

module.exports = calculate_elements_sum;
