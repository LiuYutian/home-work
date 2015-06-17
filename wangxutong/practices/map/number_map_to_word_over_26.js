'use strict';
var _ = require('../my_lodash/my_lodash.js');

var number_map_to_word_over_26 = function(collection){
    return _(collection).map(function (item) {
        return _().num_to_letter(item).value();
    }).value();
};

module.exports = number_map_to_word_over_26;
