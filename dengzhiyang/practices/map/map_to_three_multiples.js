'use strict';
var _ = require('../array/lodash.js');

var map_to_three_multiples = function(collections){

  return _(collections).map(function(number){
    return number * 3;
  }).value();
};

module.exports = map_to_three_multiples;
