'use strict';
var _ = require('../../mylodash/array.js');
function find_last_even(collection) {
    return _(collection).last(function (element) {
        return element%2 === 0;
    });
}

module.exports = find_last_even;
