'use strict';
var _ = require('../chain/prolodash.js');

function get_letter_interval(number_a, number_b) {
    return _(number_a).range(number_b).map(function(n) {
        return String.fromCharCode(n + 96);
    }).value();
}
function _(collection){
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}
var function each(collection,fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i].i)
    }
}

_.prototype.each = function(fun) {
    each(this.collection,fun);
    return this;
}
_.each = each;

_.prototype.range = function(collection) {
    var result 
}
module.exports = get_letter_interval;
