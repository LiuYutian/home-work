'use strict';
var _ = require('../../mylodash/array.js');
function map_to_even(collection){
    
    return _(collection).map(function(element){
        return element * 2;
    }).value();
}
module.exports = map_to_even;
