'use strict';
var _ = require("../../mylodash.js");
function double_to_one(collection) {
    var all = [];

    _(collection).each(function(n, i) {
        if(n.length == undefined) {
            all.push(n);
        }
        _(n).each(function(m) {
            all.push(m);
        })
    });
    return all;
}

module.exports = double_to_one;





//return _.flatten(collection);
