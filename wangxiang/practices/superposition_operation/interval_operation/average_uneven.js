'use strict';
var _ = require('../../../mylodash/array.js');

function average_uneven(collection) {

    return _(collection).filter(function (element) {
        return element%2 !== 0;
    }).average();
}

module.exports = average_uneven;
