'use strict';
function find_first_even(collection) {
    var _ = require('../../lodash.js');

    var result= _(collection).filter(
        function(n,i){
            return n%2 === 0;
    }).value();

    return _(result).first().value();

}

module.exports = find_first_even;
