'use strict';
var _ = require('../my_lodash/my_lodash.js');

function collect_min_number(collection) {
    return _(collection).min().value();
}

module.exports = collect_min_number;
