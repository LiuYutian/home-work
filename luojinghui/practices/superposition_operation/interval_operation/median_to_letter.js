'use strict';
var _ = require('../../chain/prolodash.js');

function median_to_letter(collection) {
    return _().num_change_letter(Math.ceil(_(collection).median()));
}

module.exports = median_to_letter;
