'use strict';

 function map_to_three_multiples(collection){
    var _ = require("../../lodash");

    return  _(collection).map(function(n){
        return n*3;
    }).value();

}
module.exports = map_to_three_multiples;
