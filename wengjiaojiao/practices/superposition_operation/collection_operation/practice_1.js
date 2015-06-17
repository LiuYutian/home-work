'use strict';
var _ = require("../../../mylodash.js");

function hybrid_operation(collection) {
    return _(collection).map(function(n) {
        return n * 3 + 2;
    }).sum().value();
}

module.exports = hybrid_operation;
