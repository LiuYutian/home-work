'use strict';
var _ = require('../my_lodash/my_lodash.js');

function map_to_even(collection){
    return _(collection).map(function (item) {
        return item * 2;
    }).value();
}
module.exports = map_to_even;
