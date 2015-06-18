var array = [0,1,2,3,4,5,6,7,8,9];
var number = 0;
for (var i = 0; i < 10000; i++) {
  var array_b = array.sort(function(){
    return Math.random()>0.5;
  });

  if (array_b[0] === 0) {
    number++;
  }
}
console.log(number/100+'%');
