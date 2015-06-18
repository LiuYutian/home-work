'use strict';
var _ = require('../../../../mylodash/array.js');
var single_element = function(collection){
    var result = [];
    _(collection).filter(function (element,i) {
        return (i+1)%2 === 0;
    }).num_group(function (element) {
        return element+'_';
    }).values(function (value,key) {
        if (value == 1) {
        result.push(parseInt(key));
        }
    });
    return result;
};
module.exports = single_element;
