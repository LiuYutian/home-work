'use strict';
var _ = require('../../../mylodash/array.js');

function one_add_next_multiply_three(collection){
    var result = [];
    _(collection).each(function (element, i) {
        if (i !== collection.length -1) {
            for (var j = i; j < collection.length; j++) {
                result.push((element + collection[j+1])* 3);
                break;
            }
        }
    });
  return result;
}
module.exports = one_add_next_multiply_three;
