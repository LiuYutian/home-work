'use strict';
var _ = require("../../mylodash.js");

function compute_median(collection) {

    return _(collection).rank(function(a, b) {
        return a > b;
    }).median().value();

}

module.exports = compute_median;
