'use strict';
var _ = require('../chain/prolodash.js');
function compute_chain_median(collection) {
    var array = [];

    return _(collection.split('->')).map(function(n) {
        return Number(n);
    }).median();

}
module.exports = compute_chain_median;
