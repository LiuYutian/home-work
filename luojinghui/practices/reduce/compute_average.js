'use strict';
var _ =require('../chain/prolodash.js');

function compute_average(collection) {
    var sum = _(collection).reduce(function(a,b) {
        return a + b;
    }).value();
    return sum / collection.length;
    //
    // var sum;
    //
    // sum = _.reduce(collection,function(a,b) {
    //     return a + b;
    // });
    // return (sum / collection.length);
}

module.exports = compute_average;
