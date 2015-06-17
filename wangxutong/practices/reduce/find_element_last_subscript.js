'use strict';
var _ = require('../my_lodash/my_lodash.js');

function calculate_elements_sum(collection, element) {
    var subscript;
    _(collection).each(function (item,i) {
        if (item === element) {
            subscript = i;
        }
    });
    return subscript;
}

module.exports = calculate_elements_sum;
