'use strict';
var _ = require('../my_lodash/my_lodash.js');

function find_first_even(collection) {
    return _(collection).first(function (num) {
        return num % 2 === 0;
    }).value();
}

module.exports = find_first_even;
