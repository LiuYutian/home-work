'use strict';
var _ = require('../../mylodash/array.js');
function choose_no_repeat_number(collection) {
  return _(collection).no_repeat().value();
}
module.exports = choose_no_repeat_number;
