'use strict';

function one_add_next_multiply_three(collection) {
    var _ = require('../../mylodash/prototype.js');
    var result = [];
    var len = collection.length;
    _(collection).each(function(item, i) {
        if (i < len - 1) {
            result.push((item + collection[i + 1]) * 3);
        }
    });
    return result;
}
module.exports = one_add_next_multiply_three;
