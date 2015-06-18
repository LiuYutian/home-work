'use strict';
var _ = require('../../../mylodash/array.js');
function average_to_letter(collection) {
  var array = [];
  var result = 0;
  _(collection).each(function (element) {
      array.push(element);
  });
  var average = Math.ceil(_(array).average());
  result = _().get_num_map_letter(average).value();
  return result;
}

module.exports = average_to_letter;
