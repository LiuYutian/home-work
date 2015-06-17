'use strict';
var _ = require('../chain/prolodash.js');

function double_to_one(collection) {
    var result = [];

    // _.foreach(collection,function(n) {
    //     for(var j = 0; j < n.length; j++) {
    //         result.push(n[j]);
    //     }
    // });
    // return _.no_repeat(result);

    _(collection).each(function(n) {
        _(n).each(function(m) {
            result.push(m);
        })
    });
    return _(result).no_repeat().value();
}

module.exports = double_to_one;
