'use strict';
var _ = require('../../mylodash/array.js');
function double_to_one(collection) {
    return _(collection).flatten().no_repeat().value();
}

module.exports = double_to_one;
