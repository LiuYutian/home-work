'use strict';
var _ = require('../../mylodash/array.js');
var map_to_three_multiples = function(collections){

    return _(collections).map(function(element){
        return element * 3;
    }).value();
};
module.exports = map_to_three_multiples;
