'use strict';

function compute_average(collection) {
    var _= require('../../lodash.js');

    var  sum = _(collection).sum().value();

    return sum/collection.length;
    
}

module.exports = compute_average;
