'use strict';
var _ = require('../array/lodash');
var rank_desc = function(collection){
  return _(collection).rank(function(a,b){
    return a>b;
  }).value();
};

module.exports = rank_desc;
