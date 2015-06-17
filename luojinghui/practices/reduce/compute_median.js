'use strict';
var _ = require('../chain/prolodash.js');

function compute_median(collection) {
    return _(collection).median();
}

module.exports = compute_median;
