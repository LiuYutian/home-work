'use strict';
var _ = require('../../my_lodash/my_lodash.js');
function hybrid_operation(collection) {
    return _(collection).map(function (item) {
        return item * 3 + 2;
    }).sum().value();
}

module.exports = hybrid_operation;
