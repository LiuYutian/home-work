'use strict';
var number_map_to_word_over_26 = function(collection){
    var _ = require("../../lodash.js");
    var array = [];

    for(var i = 0; i < collection.length; i++) {
        array.push(_().letter(collection[i]));
    }
    return array;
    
};

module.exports = number_map_to_word_over_26;
