'use strict';
var _ = require('../my_lodash/my_lodash.js');

function choose_common_elements(collection_a, collection_b) {
    var result = [];
    _(collection_a).each(function (item,i) {
        if (_(collection_b).exist(item).value()) {
            result.push(item);
        }
    });
    return result;
}

module.exports = choose_common_elements;
