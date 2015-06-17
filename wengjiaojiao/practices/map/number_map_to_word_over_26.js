'use strict';
var _ = require("../../mylodash.js");
var number_map_to_word_over_26 = function(collection){
    return _(collection).map(function(n) {
        return _.num_to_letter(n);
    }).value();
};

module.exports = number_map_to_word_over_26;
