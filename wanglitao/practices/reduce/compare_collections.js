'use strict';

function compare_collections(collection_a, collection_b) {
    var _ = require("../../lodash.js");
    var mark = false;

     _(collection_b).each(function(n){
        _(collection_a).each(function(a){
            if(n === a) {
                mark = true;
            }
        });
    });

    return mark;

}

module.exports = compare_collections;
