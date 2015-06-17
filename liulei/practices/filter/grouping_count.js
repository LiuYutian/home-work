'use strict';

function grouping_count(collection) {
    var _ = require('../mylodash/prototype.js');
    var result = {};
    _(collection).each(function(item, i) {
        result[item] = result[item] || 0;
        result[item]++;
    });
    return result;
}

module.exports = grouping_count;
