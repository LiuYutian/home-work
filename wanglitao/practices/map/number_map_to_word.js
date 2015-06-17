'use strict';
var number_map_to_word = function(collection){
    var _ = require('../../lodash.js');

    return _(collection).map(function(n){
        return _().letter(n);
    }).value();

};
module.exports = number_map_to_word;
