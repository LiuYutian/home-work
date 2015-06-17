'use strict';
var _ = require('../chain/prolodash.js');

function collect_min_number(collection) {
    var a = _(collection).reduce(function(m,n) {
        return Math.min(m,n);
    }).value();
    return a;
}

module.exports = collect_min_number;

/*
在这里写入代码
var result = collection[0];
for(var i=0; i<collection.length; i++) {
    if (collection[i] < result) {
        result = collection[i];
    }
}
return result;
*/
