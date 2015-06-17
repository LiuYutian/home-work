'use strict';
var calculate_median = function(collection){
	var _= require("../../../../lodash.js");

	var result = _(collection).median();

	return Math.ceil(result);
	
};
module.exports = calculate_median;
