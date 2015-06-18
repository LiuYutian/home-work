'use strict';
var _ = require('../../../mylodash/array.js');
function even_to_letter(collection) {

  var array = [];
  _(collection).each(function (element) {
      array.push(element);
  });
  var result = _(array).filter(function (element) {
      return element%2 === 0;
  }).get_charcode().value();
  return result;
}

module.exports = even_to_letter;
