'use strict';
var is_exist_element = function(collection, element) {
    var _ = require('../../../mylodash/prototype.js');
    var result = false;
    _(collection).each(function(item, i) {
        if (i % 2 === 0 && item === element) {
            result = true;
        }
    });
    return result;
};
module.exports = is_exist_element;
