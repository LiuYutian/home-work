'use strict';
var _ = require('../my_lodash/my_lodash.js');

function choose_even(collection) {
    return _(collection).filter(function (item,i) {
        return item % 2 === 0;
    }).value();
}

module.exports = choose_even;
