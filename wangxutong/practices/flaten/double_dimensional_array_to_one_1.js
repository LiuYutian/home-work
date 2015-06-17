'use strict';
var _ = require('../my_lodash/my_lodash.js');
function double_to_one(collection) {
    return _(collection).flatten().value();
}

module.exports = double_to_one;
