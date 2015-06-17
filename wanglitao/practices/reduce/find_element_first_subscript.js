'use strict';

function calculate_elements_sum(collection, element) {
    var _= require('../../lodash.js');
    var index = -1;
    var exist = true;

    _(collection).each(function(n,i){
        if(n === element && exist) {
            index = i;
            exist = false;
        }
    });
    
    return index;
}

module.exports = calculate_elements_sum;
