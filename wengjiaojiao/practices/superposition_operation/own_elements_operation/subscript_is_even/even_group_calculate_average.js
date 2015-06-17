'use strict';
var _ = require("../../../../mylodash.js");
var even_group_calculate_average = function(collection) {
    var temp = {};
    var result = [];

    var even  = _(collection).filter(function(n,i){
        return (i+1) % 2 === 0 && n % 2 === 0;
    }).value();

    _(even).each(function(n,i){
        var collection_len = n.toString().length;

        temp[collection_len] = temp[collection_len] || [];
        temp[collection_len].push(n);
    })

    for(var key in temp) {
        var sum = 0;
        var key_length = temp[key].length;

        if(key_length != 0) {
            for (var i = 0; i < key_length; i++) {
                sum += temp[key][i];
            }
            result.push(sum / key_length);
        }
    }
    return result.length === 0 ? [0] : result;
}

module.exports = even_group_calculate_average;
//
// filter = function(collection,fun) {
//     var result = [];
//
//     each(collection,function(n,i){
//         if(fun(n,i)) {
//             result.push(n);
//         }
//     });
//     return result;
// }
//
// each = function(collection,fun){
//     for (var i = 0; i < collection.length; i++) {
//         fun(collection[i],i);
//     }
// }
