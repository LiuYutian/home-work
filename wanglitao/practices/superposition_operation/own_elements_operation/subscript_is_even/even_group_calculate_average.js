'use strict';
var even_group_calculate_average = function(collection){
	var _= require("../../../../lodash.js");
	var result = [];

	var even_result=_(collection).filter(function(n,i){
        return n%2 === 0 && (i+1)%2 === 0;
	}).value();

	var temp = {};
	_(even_result).each(function(n,i){
		temp[(n+"").length] = temp[(n+"").length] || [];
		temp[(n+"").length].push(n);
	});

	var sum = 0;
	for(var i in temp) {
		var arr = temp[i];
        sum = _(arr).reduce(function(a,b){
			return a+b;
		}).value();
		result.push(sum/arr.length);
	}

	return result.length=== 0 ? [0]:result;

};
module.exports = even_group_calculate_average;
