'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    var _ = require("../../lodash.js");

    for(var i = 0; i < collection_b.length; i++) {
        collection_a.push(collection_b[i]);
    }

    var result = _(collection_a).count();
    var array = [];

    for(var key in result) {
        if(result[key]===1) {
            array[array.length] = key;
        }
    }

    return array;
    
}

module.exports = choose_no_common_elements;
