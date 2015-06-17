'use strict';
var _ = require('../my_lodash/my_lodash.js');

var map_to_three_multiples = function(collections){
    return _(collections).map(function (item,i) {
        return item * 3;
    }).value();
};

module.exports = map_to_three_multiples;
