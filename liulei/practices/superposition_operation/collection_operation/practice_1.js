'use strict';

function hybrid_operation(collection) {
    var _ = require('../../mylodash/prototype.js');
    return _(collection).map(function(item) {
        return item * 3 + 2;
    }).sum().value();
}

module.exports = hybrid_operation;
