'use strict';
var _ = require('../../../../mylodash/array.js');

var calculate_average = function(collection){
    var array = [];
    _(collection).each(function(element){
        array.push(element);
    });
    var average = 0;
    if (array.length%2 === 0) {
        average = _(array).average();
    }else{
        average = Math.ceil(_(array).average());
    }
    return average;

};
module.exports = calculate_average;
