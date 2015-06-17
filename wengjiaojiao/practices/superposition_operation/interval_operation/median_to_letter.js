'use strict';
var _ = require("../../../mylodash.js");
function median_to_letter(collection) {

    var median = Math.ceil(_(collection).median().value());
    return _.num_to_letter(median);
}
module.exports = median_to_letter;
