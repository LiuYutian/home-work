'use strict';
var _ = require('../my_lodash/my_lodash.js');

function find_last_even(collection) {
    return _(collection).last(function (num) {
        return num % 2 === 0;
    }).value();
}

module.exports = find_last_even;
