'use strict';
var _ = require('../chain/prolodash.js');
function calculate_elements_sum(collection, element) {
    var index = -1;
    var exist = true;

    _(collection).each(function(n,i) {
        if(element === n && exist) {
            index = i;
            exist = false;
        }
    });
    return index;
    // //在这里写入代码
    // var _ = require('../lodash/mylodash.js');
    // var index = -1;
    // var exist = true;
    //
    // _.foreach(collection,function(n,i) {
    //     if(element === collection[i] && exist) {
    //         index = i;
    //         exist = false;
    //     }
    // });
    // return index;
}

module.exports = calculate_elements_sum;
