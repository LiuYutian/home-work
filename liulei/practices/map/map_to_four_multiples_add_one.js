'use strict';
var map_to_four_multiples_add_one = function(collection){
    var _ = require('../mylodash/prototype.js');
    return _(collection).map(function(val) {
        return val * 4 + 1;
    }).value();
};

module.exports = map_to_four_multiples_add_one;
