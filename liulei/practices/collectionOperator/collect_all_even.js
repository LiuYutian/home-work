'use strict';
function collect_all_even(collection) {
    var _ = require('../mylodash/prototype.js');
    return _(collection).filter(function(num) {
        return num % 2 === 0;
    }).value();
}

module.exports = collect_all_even;
