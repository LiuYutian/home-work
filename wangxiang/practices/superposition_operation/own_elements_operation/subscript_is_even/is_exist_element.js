'use strict';
var _ = require('../../../../mylodash/array.js');

var is_exist_element = function(collection,element){
    return _(collection).filter(function (c_element, i) {
        return i%2 === 0;
    }).exist(element);
};
module.exports = is_exist_element;
