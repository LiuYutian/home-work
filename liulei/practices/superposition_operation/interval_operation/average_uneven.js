'use strict';

function average_uneven(collection) {
    var _ = require('../../mylodash/prototype.js');
    var result_array = _(collection).filter(function(item, i) {
        return item % 2 === 1;
    }).value();
    return _(result_array).sum().value() / result_array.length;
}

module.exports = average_uneven;
