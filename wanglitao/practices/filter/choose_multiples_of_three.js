'use strict';

function choose_multiples_of_three(collection) {
    var _ = require("../../lodash.js");

    return _(collection).filter(
    function(a,b){
        return a%3 === 0;
    }).value();
    
}

module.exports = choose_multiples_of_three;
