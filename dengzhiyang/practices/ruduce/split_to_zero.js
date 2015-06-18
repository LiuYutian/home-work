'use strict';

function spilt_to_zero(number, interval) {

  var array = [];
  array.push(number);
  for (var i = 0; number>0; i++) {
    number = number - interval;
    number = number.toFixed(2)*1;
    array.push(number);
  }
  return array;
}

module.exports = spilt_to_zero;
