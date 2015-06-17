'use strict';

function each(array, fun) {
    for (var i = 0; i < array.length; i++) {
        fun(array[i], i);
    }
}

function map(array, fun) {
    var result = [];
    each(array, function(item) {
        result.push(fun(item));
    });
    return result;
}

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
var number_map_to_word_over_26 = function(collection) {
    var result = map(collection, function(number) {
        return number_to_letter(number);
    });
    return result;
};

module.exports = number_map_to_word_over_26;
