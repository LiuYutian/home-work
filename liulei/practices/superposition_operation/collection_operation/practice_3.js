'use strict';

function hybrid_operation_to_uneven(collection) {
    var _ = require('../../mylodash/prototype.js');
    return _(collection).filter(function(item, i) {
        return item % 2 === 1;
    }).map(function(item) {
        return item * 3 + 5;
    }).sum().value();
}

module.exports = hybrid_operation_to_uneven;
