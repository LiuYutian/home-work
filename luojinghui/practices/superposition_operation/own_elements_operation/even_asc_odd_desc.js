'use strict';
var _ = require('../../chain/prolodash.js');

var even_asc_odd_desc = function(collection){
    var collection_a = _(collection).sort(function(a,b) {
        return a > b;
    }).value();

    var array = [];
    var array_2 = [];

    _(collection_a).each(function(n) {
        if(n % 2 === 0) {
            array.push(n);
        }
    })

    for (var a = collection_a.length - 1; a >= 0; a --) {
        if(collection_a[a] % 2 != 0) {
            array_2.push(collection_a[a]);
        }
    }
    return _(array).concat(array_2).value();
};
module.exports = even_asc_odd_desc;
