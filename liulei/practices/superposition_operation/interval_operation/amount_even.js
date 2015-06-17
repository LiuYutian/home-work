'use strict';

function amount_even(collection) {
    var _ = require('../../mylodash/prototype.js');
    return _(collection).filter(function(item, i) {
        return item % 2 === 0;
    }).sum().value();
}

module.exports = amount_even;
