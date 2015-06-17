'use strict';
var _ = require('../chain/prolodash.js');

function choose_no_repeat_number(collection) {
    return _(collection).no_repeat().value();
}

module.exports = choose_no_repeat_number;
