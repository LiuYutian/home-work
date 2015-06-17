'use strict'
var is_exist_element = function(collection,element){
    var _= require('../../../../lodash.js');

    var result = _(collection).filter(function(n,i){
        return i%2 === 0;
    }).value();

    return  _(result).exist(element).value();
    
};

module.exports = is_exist_element;
