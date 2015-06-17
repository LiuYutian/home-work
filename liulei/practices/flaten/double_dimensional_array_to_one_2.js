'use strict';

function double_to_one(collection) {
    var _ = require('../mylodash/prototype.js');
    var array = _(collection).flatten().value();
    var result = [];
    _(array).each(function(item, i) {
        if (!_(result).exist(item).value()) {
            result[result.length] = item;
        }
    });
    return result;
}

module.exports = double_to_one;
