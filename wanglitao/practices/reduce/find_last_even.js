'use strict';

function find_last_even(collection) {
    var _ = require('../../lodash.js');

    var last_even = (collection).filter(function(n,i){
        return n%2  === 0;
    });

    return _(last_even).reduce(function(a,b){
        return b;
    }).value();
    
}

module.exports = find_last_even;
