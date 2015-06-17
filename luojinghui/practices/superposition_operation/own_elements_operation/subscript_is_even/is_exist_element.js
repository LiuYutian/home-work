'use strict';
var _ = require('../../../chain/prolodash.js');

var is_exist_element = function(collection,element){
    return _(collection).filter(function(n,i) {
        return i % 2 === 0;
    }).is_exist(element);
};
module.exports = is_exist_element;
