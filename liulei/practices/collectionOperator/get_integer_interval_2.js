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
function get_integer_interval_2(number_a, number_b) {
    //在这里写入代码
}

module.exports = get_integer_interval_2;
