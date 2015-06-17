'use strict';
var _ = require("../../../mylodash.js");
function rank_by_two_large_one_small(collection){
    var result = _(collection).rank(function(a, b) {
        return a > b;
    }).value();

    for(var i = 0; i < result.length-2; i += 3) {
        var temp = result[i];
        result[i] = result[i+1];
        result[i+1] = result[i+2];
        result[i+2] = temp;
    }
    return result;
}

module.exports = rank_by_two_large_one_small;
