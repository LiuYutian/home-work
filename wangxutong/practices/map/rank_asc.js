'use strict';
var _ = require('../my_lodash/my_lodash.js');

var rank_asc = function(collection){
    return _(collection).bubble_sort(function (item_a,item_b) {
        return item_a < item_b;
    }).value();
};

module.exports = rank_asc;
