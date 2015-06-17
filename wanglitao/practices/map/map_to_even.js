'use strict';
function map_to_even(collections){
    var _ = require('../../lodash.js');

    return _(collections).map(function(n){
        return n*2;
    }).value();

}

module.exports = map_to_even;
