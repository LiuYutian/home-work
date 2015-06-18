'use strict';
var _ = require('../../../mylodash/array.js');

function amount_even(collection) {

    return _(collection).filter(function (element) {
        return element%2 === 0;
    }).sum();
}

module.exports = amount_even;
