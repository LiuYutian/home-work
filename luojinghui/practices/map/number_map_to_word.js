'use strict';
var _ = require('../chain/prolodash.js');
var number_map_to_word = function(collection){
    return _(collection).map(function(n) {
        return _().num_change_letter(n);
    }).value();
}

module.exports = number_map_to_word;
