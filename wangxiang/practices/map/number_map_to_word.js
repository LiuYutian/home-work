'use strict';
var _ = require('../../mylodash/array.js');
var number_map_to_word = function(collection){
    return _(collection).get_charcode().value();
};
module.exports = number_map_to_word;
