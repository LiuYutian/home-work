'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function hybrid_operation_to_uneven(collection) {
    return _(collection).filter(function (item,i) {
        return item % 2 === 1;
    }).map(function (item) {
        return item * 3 + 5;
    }).sum().value();
}

module.exports = hybrid_operation_to_uneven;
