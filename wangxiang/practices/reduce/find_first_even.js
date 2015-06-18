'use strict';
var _ = require('../../mylodash/array.js');

function find_first_even(collection) {
    return _(collection).first(function (element) {
        return element%2 === 0;
    });
}
module.exports = find_first_even;
