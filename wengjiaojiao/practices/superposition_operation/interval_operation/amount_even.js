'use strict';
var _ = require("../../../mylodash.js");
function amount_even(collection) {
    return _(collection).filter(function(n) {
        return n % 2 === 0;
    }).sum().value();
}


module.exports = amount_even;
