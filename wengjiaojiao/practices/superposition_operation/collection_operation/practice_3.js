 'use strict';
var _ = require("../../../mylodash.js");
function hybrid_operation_to_uneven(collection) {

    return _(collection).filter(function(n) {
        return n % 2 != 0;
    }).map(function(n) {
        return n * 3 + 5;
    }).sum().value();
}
module.exports = hybrid_operation_to_uneven;
