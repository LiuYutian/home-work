'use strict';

function collect_max_number(collection) {
    var _ = require("../../lodash.js");

    return _(collection).max().value();
    
}
module.exports = collect_max_number;
