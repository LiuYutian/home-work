'use strict';
var _ = require('../my_lodash/my_lodash.js');

function get_union(collection_a, collection_b) {
    var result = _(collection_a).filter(function () {
        return true;
    }).value();
    _(collection_b).each(function (item,i) {
        if (!_(collection_a).exist(item).value()) {
            result.push(item);
        }
    });
    return result;
}

module.exports = get_union;
