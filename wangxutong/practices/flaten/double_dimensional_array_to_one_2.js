'use strict';
var _ = require('../my_lodash/my_lodash.js');
function double_to_one(collection) {
    var array = _(collection).flatten().value();
    var result = [];
    _(array).each(function (item,i) {
        if (!_(result).exist(item).value()) {
            result[result.length] = item;
        }
    });
    return result;
}

module.exports = double_to_one;
