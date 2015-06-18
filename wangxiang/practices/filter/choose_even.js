'use strict';
var _ = require('../../mylodash/array.js');
function choose_even(collection) {
  return _(collection).filter(function(element){
                return element%2 === 0;
    }).value();
}

module.exports = choose_even;
