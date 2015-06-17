'use strict';

function double_to_one(collection) {
    var _=require("../../lodash.js");
    var result = [];

    for(var i = 0; i <collection.length; i++) {
        for(var j = 0;j < collection[i].length; j++) {
            result.push(collection[i][j]);
        }
    }
    return _(result).no_repeat().value();

}

module.exports = double_to_one;
