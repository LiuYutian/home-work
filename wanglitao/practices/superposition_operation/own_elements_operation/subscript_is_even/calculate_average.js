'use strict';
var calculate_average = function(collection){
	var _= require("../../../../lodash.js");

	var even_number = _(collection).filter(function(n,i){
		return  i%2 != 0;
	}).value();

	var result = _(even_number).sum().value()/even_number.length;

	return result;
	
};
module.exports = calculate_average;
