'use strict';
var rank_desc = function(collection){
    var _=require("../../lodash.js");

    return _(collection).sort(function(a,b){
        return a < b;
    }).value();
    
};

module.exports = rank_desc;
