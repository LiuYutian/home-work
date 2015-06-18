'use strict';

function average_to_letter(collection) {
  var _ = require('../../array/lodash');
  var unmber = 0;
  _(collection).each(function(num, i){
    unmber = unmber + num;
  });
  if (unmber%(collection.length)===0) {
    unmber = unmber/(collection.length);
  }else {
    unmber = parseInt(unmber/(collection.length)) + 1;
  }
  return String.fromCharCode(unmber+96);
}

module.exports = average_to_letter;
