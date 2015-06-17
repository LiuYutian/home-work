'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function average_to_letter(collection) {
    var sum = _(collection).sum().value();
    var average = Math.ceil(sum/collection.length);
    return  _().num_to_letter(average).value();
}

module.exports = average_to_letter;
