'use strict';
var _ = require('../chain/prolodash.js');

function calculate_elements_sum(collection, element) {
    var index = 0;

    _(collection).each(function(n,i) {
        if(n === element) {
            index = i;
        }
    });
    return index;

    // for (var i = collection.length - 1; i >= 0; i--) {
    //     if(element === collection[i]) {
    //         return i;
    //     }
    // }
}

module.exports = calculate_elements_sum;
