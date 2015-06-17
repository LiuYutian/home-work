'use strict';
var _ = require("../../mylodash.js");
function compute_chain_median(collection) {
    var string_array = [];
    var num_array = [];

    string_array = collection.split('->');
    for (var i = 0; i < string_array.length; i++) {
        num_array.push((parseInt(string_array[i])));
    }

    return _(num_array).rank(function(a, b){
        return a > b;
    }).median().value();
}

module.exports = compute_chain_median;
