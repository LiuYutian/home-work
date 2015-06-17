'use strict';

function collect_last_element(collection) {
    var _ = require('../../lodash.js');

    return _(collection).reduce(function(a,b){
        return b;
    }).value();
    
}
module.exports = collect_last_element;
