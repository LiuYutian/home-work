'use strict';
var _ = require('../my_lodash/my_lodash.js');

function choose_multiples_of_three(collection) {
    return _(collection).filter(function (item,i) {
        return item % 3 === 0;
    }).value();
}

module.exports = choose_multiples_of_three;
