'use strict';

function double_to_one(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).flatten().value();
}

module.exports = double_to_one;
