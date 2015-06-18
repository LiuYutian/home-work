'use strict';
var _ = require('../../array/lodash');
function median_to_letter(collection) {

  var array =_.rank(collection);
  var median = Math.ceil(_(array).median().value());

  var quotient;
  var remainder;
  quotient = parseInt(median/26);
  remainder = median%26;
  if (remainder===0) {
    quotient = quotient-1;
    remainder = 26;
  }
  if (quotient===0) {
    return String.fromCharCode(remainder+96);
  }else {
    return (String.fromCharCode(quotient+96) + String.fromCharCode(remainder+96));
  }
}

module.exports = median_to_letter;
