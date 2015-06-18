'use strict';
var _ = require('../../mylodash/array.js');
var map_to_four_multiples_add_one = function(collection){

    return _(collection).map(function(element){
        return (element * 4) + 1;
    }).value();
};
module.exports = map_to_four_multiples_add_one;
