'use strict';
var _ = require('../my_lodash/my_lodash.js');

function grouping_count(collection) {
    var result = _(collection).group(function (item,i) {
        return item;
    }).map_value(function (value,key) {
        return value.length;
    }).value();

    return result;

}

module.exports = grouping_count;
