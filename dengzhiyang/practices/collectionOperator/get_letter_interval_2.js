'use strict';

function get_letter_interval_2(number_a, number_b) {
  var array = [];
  var i;
  if (number_a < number_b) {
    for ( i = number_a; i <= number_b; i++) {
      littie();
    }
  }else if (number_a >= number_b) {
    for ( i = number_a; i >= number_b; i--) {
      littie();
    }
  }
  return array;

  function littie(){
    var quotient,remainder;
    quotient = parseInt(i/26);
    remainder = i%26;
    if (remainder===0) {
      quotient = quotient-1;
      remainder = 26;
    }
    if (quotient===0) {
      array.push(String.fromCharCode(remainder+96));
    }else {
      array.push(String.fromCharCode(quotient+96) + String.fromCharCode(remainder+96));
    }
  }
}

module.exports = get_letter_interval_2;
