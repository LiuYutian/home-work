'use strict';
var _ = require('../../chain/prolodash.js');

function one_add_next_multiply_three(collection){
    var array = [];

    _(collection).each(function(n,i) {
        if(i < collection.length - 1) {
            array.push((n + collection[i + 1]) * 3);
        }
    });
    return array;

}
module.exports = one_add_next_multiply_three;
