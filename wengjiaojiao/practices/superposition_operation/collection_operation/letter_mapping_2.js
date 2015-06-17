'use strict';
var _ =require("../../../mylodash.js");

function average_to_letter(collection) {
    var aver =Math.ceil(_(collection).sum().value() / collection.length);
    //console.log(aver);
    return _.num_to_letter(aver);
}


module.exports = average_to_letter;
