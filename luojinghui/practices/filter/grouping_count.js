'use strict';
var _ = require('../chain/prolodash.js');

function grouping_count(collection) {
    var temp = {};

    _(collection).each(function(n,i) {
        temp[n + ''] = temp[n + ''] || 0;
        temp[n + '']++;
    });
    return temp;
}

module.exports = grouping_count;
