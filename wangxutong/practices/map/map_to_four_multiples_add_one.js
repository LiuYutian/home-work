'use strict';
var _ = require('../my_lodash/my_lodash.js');

var map_to_four_multiples_add_one = function(collection){
    return _(collection).map(function (item) {
        return item * 4 + 1;
    }).value();
};

module.exports = map_to_four_multiples_add_one;
