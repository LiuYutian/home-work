'use strict';
function rank_by_two_large_one_small(collection){
    var _=require("../../../lodash.js");
    var result = [];

    var array = _(collection).sort(function(a,b){
        return a < b;
    }).value();

    for(var i = 0;i < array.length-2; i +=3) {
        var temp = 0;
        temp = array[i];
        array[i] = array[i+2];
        array[i+2] = temp;
    }

    for(var i = 0;i < array.length-2; i +=3) {
        var temp = 0;
        temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
    }

    return array;
    
}

module.exports = rank_by_two_large_one_small;
