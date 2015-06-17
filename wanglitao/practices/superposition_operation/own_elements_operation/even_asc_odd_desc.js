'use strict';
var even_asc_odd_desc = function(collection){
    var _= require("../../../lodash.js");

    var even_array = _(collection).filter(function(n,i){
        return n%2 === 0;
    }).value();

    var odd_array = _(collection).filter(function(n,i){
        return n%2 != 0;
    }).value();

    var even_result = _(even_array).sort(function(a,b){
        return a < b;
    }).value();

    var odd_result = _(odd_array).sort(function(a,b){
        return b < a;
    }).value();

    _(odd_result).each(function(n,i){
        even_result.push(n);
    });
    
     return even_result;
}
module.exports = even_asc_odd_desc;
