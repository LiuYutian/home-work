'tuse strict';

function grouping_count(collection) {
    var _ = require("../../lodash.js");
    var  result = {};

    _(collection).each(function(n,i){
        result[[n]] = result[[n]] || 0;
        result[n]++;
    });

    return result;
    
}

module.exports = grouping_count;
