'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
    var number = [];
    if (number_a < number_b) {
        for (var i = number_a; i <= number_b; i++) {
          number.push(i);
        }
    }else if (number_a > number_b) {
        for (var x = number_a; x >= number_b; x--) {
            number.push(x);
        }
    }else if (number_a==number_a) {
            number.push(number_a);
    }
    return number;
}

module.exports = get_integer_interval;
