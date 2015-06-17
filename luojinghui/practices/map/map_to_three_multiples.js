'use strict';
var _ = require('../chain/prolodash.js');
var map_to_three_multiples = function(collections){
    return _(collections).map(function(n) {
        return n * 3 ;
    }).value();
}

module.exports = map_to_three_multiples;
