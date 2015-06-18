'use strict';
var _ = require('../../../mylodash/array.js');

function hybrid_operation(collection) {

    var result = _(collection).map(function (element) {
            return element*3 + 2;
    }).sum();
    return result;
}

module.exports = hybrid_operation;
