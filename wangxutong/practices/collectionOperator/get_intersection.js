'use strict';
var _ = require('../my_lodash/my_lodash.js');

function get_intersection(collection_a, collection_b) {
    var result = [];
    _.each(collection_b,function (item,i) {
        if (_.exist(collection_a,item)) {
            result.push(item);
        }
    });
    return result;
}

module.exports = get_intersection;
