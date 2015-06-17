'use strict';

function even_to_letter(collection) {
    var _ = require('../../mylodash/prototype.js');
    return _(collection).filter(function(item, i) {
        return item % 2 === 0;
    }).map(function(item) {
        return _().num_to_letter(item).value();
    }).value();
}

module.exports = even_to_letter;
