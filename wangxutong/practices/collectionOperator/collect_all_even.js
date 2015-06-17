'use strict';
var _ = require('../my_lodash/my_lodash.js');

function collect_all_even(collection) {
    return _(collection).filter(function (num) {
        return num % 2 === 0;
    }).value();
}

module.exports = collect_all_even;
