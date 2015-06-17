'use strict';

function get_intersection(collection_a, collection_b) {
    var _ = require("../../lodash.js");
    var result = [];

    _(collection_b).each(function(n){
        _(collection_a).each(function(b){
            if(n === b) {
                result.push(n);
            }
        });
    });

    return result;
    
}
module.exports = get_intersection;
