'use strict';
var _ = require('../chain/prolodash.js');

var rank_desc = function(collection){
    return _(collection).sort(function(a,b) {
        return a > b;
    });
}

module.exports = rank_desc;
