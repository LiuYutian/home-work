'use strict';
var _ = require("../../../../mylodash.js");
var single_element = function(collection){

    var even = _(collection).filter(function(n, i) {
        return (i + 1) % 2 === 0;
    }).value();
    var objectArray = [];

    for(var i = 0; i < even.length; i++) {
        var exist = false;

        for(var j = 0; j < objectArray.length; j++) {
            if(even[i] === objectArray[j].num) {
                objectArray[j].count++;
                exist = true;
            }
        }
        if(!exist) {
            objectArray.push({
                num : even[i],
                count : 1
            });
        }
    }
    var result = [];
    _(objectArray).each(function(n,i) {
        if(n.count === 1) {
            result.push(n.num);
        }
    });
    return result;
}

module.exports = single_element;
