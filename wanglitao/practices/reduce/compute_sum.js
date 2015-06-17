'use strict';

function calculate_elements_sum(collection) {
    var _ = require("../../lodash.js");

    return _(collection).sum(collection).value();
    
}

module.exports = calculate_elements_sum;
