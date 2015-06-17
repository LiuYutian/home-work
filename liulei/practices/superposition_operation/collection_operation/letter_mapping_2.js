'use strict';

function average_to_letter(collection) {
    var _ = require('../../mylodash/prototype.js');
    var sum = _(collection).sum().value();
    var average = Math.ceil(sum / collection.length);
    return _().num_to_letter(average).value();
}

module.exports = average_to_letter;
