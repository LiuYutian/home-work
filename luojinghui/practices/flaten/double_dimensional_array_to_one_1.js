'use strict';
var _ = require('../chain/prolodash.js');

function double_to_one(collection) {

    var result = [];

    _(collection).each(function(n) {
        if(n.length == undefined) {
            result.push(n);
        }
        _(n).each(function(m) {
            result.push(m);
        })
    })
    return result;
}



module.exports = double_to_one;
