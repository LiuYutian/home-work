'use strict';
function map_to_four_multiples_add_one(collection){
    var _ = require("../../lodash.js");
    
    return _(collection).map(function(n){
        return n*4+1;
    }).value();

}
module.exports = map_to_four_multiples_add_one;
