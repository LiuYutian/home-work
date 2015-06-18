'use strict';

function get_integer_interval_2(number_a, number_b) {
  
  var number = [];

  if (number_a < number_b) {
    littie();
  }else if (number_a > number_b) {
    big();
  }else if (number_a==number_b) {
    equation();
  }

  return number;

  function littie(){
    for (var i = number_a; i <= number_b; i+=2) {
      if (i%2===0) {
        number.push(i);
      }else {
        number.push(i+1);
      }
    }
  }

  function big(){
    for (var x = number_a; x >= number_b; x-=2) {
      if (x%2===0) {
        number.push(x);
      }else {
        number.push(x-1);
      }
    }
  }

  function equation(){
    if (number_a%2===0) {
      number.push(number_a);
    }
  }
}

module.exports = get_integer_interval_2;
