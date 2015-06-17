'use strict';
var _ = require('../chain/prolodash.js');

function collect_last_element(collection) {
    return _(collection).reduce(function(a,b) {
        return b;
    }).value();
}

module.exports = collect_last_element;
