'use strict';

function average_to_letter(collection) {
    var _= require("../../../lodash.js")
    var sum =(_(collection).sum().value());

    var average =Math.ceil(sum/collection.length);
    return _().letter(average);
    
}

module.exports = average_to_letter;
