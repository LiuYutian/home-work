'use strict';
var map_to_three_multiples = function(collections){
    var _ = require('../mylodash/prototype.js');
    return _(collections).map(function(val) {
        return val * 3;
    }).value();
};

module.exports = map_to_three_multiples;
