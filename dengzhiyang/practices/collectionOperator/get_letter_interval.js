'use strict';

function get_letter_interval(number_a, number_b) {
  var array = [];
  if (number_a < number_b) {
    littie();
  }else if (number_a > number_b) {
    big();
  }else if (number_a==number_b) {
    equation();
  }
  return array;

  function littie(){
    for (var i = number_a; i <= number_b; i++) {
      array.push(String.fromCharCode(i+96));
    }
  }

  function big(){
    for (var x = number_a; x >= number_b; x--) {
      array.push(String.fromCharCode(x+96));
    }
  }

  function equation(){
    array.push(String.fromCharCode(number_a+96));
  }
}

module.exports = get_letter_interval;
