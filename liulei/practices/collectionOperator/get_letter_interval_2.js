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

function range(number_a, number_b) {
    var result = [];
    var num = Math.abs(number_a - number_b);
    for (var i = 0; i <= num; i++) {
        if (number_a <= number_b) {
            result.push(number_a++);
        } else {
            result.push(number_a--);
        }
    }
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

function get_letter_interval_2(number_a, number_b) {
    var range_array = range(number_a, number_b);
    var result = map(range_array, function(item) {
        return number_to_letter(item);
    })
    return result;
}

module.exports = get_letter_interval_2;
