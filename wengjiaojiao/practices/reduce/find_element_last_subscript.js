'use strict';
var _ = require("../../mylodash.js");

function calculate_elements_sum(collection, element) {
    return _(collection).last_indexof(element);
}


module.exports = calculate_elements_sum;
