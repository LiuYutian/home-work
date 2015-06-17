'use strict';

function collect_max_number(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).max().value();
}

module.exports = collect_max_number;
