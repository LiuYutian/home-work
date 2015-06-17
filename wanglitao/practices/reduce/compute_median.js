'use strict';

function compute_median(collection) {
    var _ = require("../../lodash.js");

    var result = _(collection).sort(function(a,b){
        return a > b ;
    }).value();

    return _(result).median();
    
}

module.exports = compute_median;
