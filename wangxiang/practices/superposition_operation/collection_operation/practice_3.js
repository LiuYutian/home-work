'use strict';
var _ = require('../../../mylodash/array.js');

function hybrid_operation_to_uneven(collection) {

    var result = _(collection).filter(function (element) {
         return element%2 !==0;
     }).map(function (element) {
         return (element*3) + 5;
     }).sum();
    return result;
}

module.exports = hybrid_operation_to_uneven;
