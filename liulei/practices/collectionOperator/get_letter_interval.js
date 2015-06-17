'use strict';

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


function get_integer_interval(number_a, number_b) {
    var result = [];
    result = range(number_a, number_b);

    return map(result, function(n) {
        return String.fromCharCode(n + 96);
    });

}

module.exports = get_integer_interval;
