'use strict';
var _ = require('../../mylodash/array.js');
var number_map_to_word_over_26 = function(collection){
    return _(collection).num_map_letter().value();
};
module.exports = number_map_to_word_over_26;
