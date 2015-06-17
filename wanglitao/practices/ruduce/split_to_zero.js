
 'use strict';
 
function spilt_to_zero(number, interval) {
   var array = [];
   var length = (interval+"").length;

   array[array.length] = number;

   while(number>0) {
       number = Number((number-interval).toFixed(length));
       array[array.length] = number;
   }

   return array;
}
module.exports = spilt_to_zero;
