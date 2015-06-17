'use strict';
var _ = require('../my_lodash/my_lodash.js');

function choose_divisible_integer(collection_a, collection_b) {
    var result = [];
    _(collection_a).each(function (item_a,i) {
        _(collection_b).each(function (item_b,i) {
            if (item_a % item_b === 0) {
                result.push(item_a);
            }
        });
    });
    return result;
}

module.exports = choose_divisible_integer;
