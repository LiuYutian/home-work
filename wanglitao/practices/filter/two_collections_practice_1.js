'use strict';

function choose_common_elements(collection_a, collection_b) {
    var _ = require("../../lodash.js");
    var result = [];

     _(collection_a).each(function(n){
        _(collection_b).each(function(a){
            if(n === a) {
                result.push(n);
            }
        });
    });

    return result;
    
}

module.exports = choose_common_elements;
