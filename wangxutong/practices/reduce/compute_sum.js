'use strict';
var _ = require('../my_lodash/my_lodash.js');

function calculate_elements_sum(collection) {
    return _(collection).sum().value();
}

module.exports = calculate_elements_sum;
