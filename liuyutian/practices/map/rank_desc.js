'use strict';

var _ = require('../../myLodash.js');

var rank_desc = function(collection){
    return _(collection).sort(function(a, b){
        return a < b;
    }).value();
};

module.exports = rank_desc;
