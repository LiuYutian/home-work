'use strict';
var _ = require('../my_lodash/my_lodash.js');

function collect_last_element(collection) {
    return _(collection).last().value();
}

module.exports = collect_last_element;
