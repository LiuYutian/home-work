'use strict';

var rank_desc = function(collection){
    var _ = require('../mylodash/prototype.js');
    return _(collection).bubble_sort(function(item_a, item_b) {
        return item_a > item_b;
    }).value();
};

module.exports = rank_desc;
