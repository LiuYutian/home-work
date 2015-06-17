'use strict';

function map_to_even(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).map(function(val) {
        return val * 2;
    }).value();
}
module.exports = map_to_even;