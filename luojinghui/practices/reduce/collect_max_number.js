'use strict';
var _ = require('../chain/prolodash.js');

function collect_max_number(collection) {
    return _(collection).reduce(function(a,b) {
        return Math.max(a,b);
    });
}
module.exports = collect_max_number;
