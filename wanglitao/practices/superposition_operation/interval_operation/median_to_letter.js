'use strict';

function median_to_letter(collection) {
    var _=require("../../../lodash.js");

    var result = Math.ceil(_(collection).median());

    return _().letter(result);
    
}

module.exports = median_to_letter;
