'use strict';
var _ = require('../../mylodash/array.js');
function calculate_elements_sum(collection, element_index) {
    return _(collection).last_index(element_index);
}
module.exports = calculate_elements_sum;
