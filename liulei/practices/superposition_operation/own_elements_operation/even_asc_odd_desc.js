'use strict';
var even_asc_odd_desc = function(collection) {
    var _ = require('../../mylodash/prototype.js');
    var odd = _(collection).filter(function(item) {
        return item % 2 === 1;
    }).bubble_sort(function(item_a, item_b) {
        return item_a < item_b;
    }).value();

    var even = _(collection).filter(function(item) {
        return item % 2 === 0;
    }).bubble_sort(function(item_a, item_b) {
        return item_a > item_b;
    }).value();

    var result = _(even).filter(function(item) {
        return true;
    }).value();

    _(odd).each(function(item, i) {
        result.push(item);
    });

    return result;
};
module.exports = even_asc_odd_desc;
