'use strict';
var _ = require('../my_lodash/my_lodash.js');

function choose_no_repeat_number(collection) {
    var result = [];
    _.each(collection,function (item,i) {
        if (!_.exist(result,item)) {
            result.push(item);
        }
    });

    return result;
}

module.exports = choose_no_repeat_number;
