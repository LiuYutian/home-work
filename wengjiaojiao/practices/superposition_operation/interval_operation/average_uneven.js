'use strict';
var _ = require("../../../mylodash.js");

function average_uneven(collection) {
    var odd = _(collection).filter(function(n) {
        return n % 2 != 0;
    }).value();

    return _(odd).sum().value() / odd.length;
}


module.exports = average_uneven;
