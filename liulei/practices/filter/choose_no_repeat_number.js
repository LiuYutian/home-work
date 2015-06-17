'use strict';

function choose_no_repeat_number(collection) {
    var _ = require('../mylodash/prototype.js');
    var result = [];
    _(collection).each(function(item, i) {
        if (!_(result).exist(item).value()) {
            result.push(item);
        }
    });
    return result;
}

module.exports = choose_no_repeat_number;
