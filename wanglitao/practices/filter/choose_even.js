'use strict';

function choose_even(collection) {
    var _ = require("../../lodash.js");

    return _(collection).filter(
    function(a,b){
        return a%2 === 0;
    }).value();

}
module.exports = choose_even;
