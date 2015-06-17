'use strict';

function number_to_letter(n) {
    var letters_left = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    var letters_right = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    var WIDTH = 26;
    var left = letters_left[parseInt((n - 1) / WIDTH)];
    var right = letters_right[(n - 1) % WIDTH];
    var result = left + right;
    return result
}

function median_to_letter(collection) {
    var _ = require('../../mylodash/prototype.js');
    var median = _(collection).bubble_sort(function(item_a, item_b) {
        return item_a > item_b;
    }).get_median().value();
    median = Math.ceil(median);
    var result = number_to_letter(median);
    return result;


}

module.exports = median_to_letter;
