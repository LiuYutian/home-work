'use strict';

function collect_min_number(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).min().value();
}

module.exports = collect_min_number;
