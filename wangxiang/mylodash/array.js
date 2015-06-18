function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}
var each = function (collection,func){
    for (var i = 0; i < collection.length; i++) {
        func(collection[i],i);
    }
};
var filter = function (collection,func) {
    var result = [];
    each(collection,function (element,i) {
        if (func(element,i)) {
            result.push(element);
        }
    });
    return result;
};
var get_num_map_letter = function (element) {
    var letters = 'zabcdefghijklmnopqrstuvwxyz';
    var LETTERS_LENGH = 26;
    var result;
    if (element / LETTERS_LENGH > 1) {
        var first_letter = letters.charAt((Math.ceil(element / LETTERS_LENGH))-1);
        var second_letter = letters.charAt(element%LETTERS_LENGH);
        result = first_letter + second_letter;
    }else {
        result = letters.charAt(element);
    }
    return result;
};
_.prototype = {
    constructor: _,
    each: function (func) {
        for (var i = 0; i < this.collection.length; i++) {
            func(this.collection[i], i);
        }
        return this;
    },
    map: function(func) {
        var result = [];
        this.each(function (element, i) {
            result.push(func(element, i))
        });
        this.collection = result;
        return this;
    },
    mapvalues: function () {
        var result = [];
        for(var key in this.collection){
               result.push(func(this.collection[key],key));
           }
        this.collection = result;
        return this;
    },
    mapkeys: function () {
        var result = [];
        for(var key in this.collection){
               result.push(func(key));
           }
        this.collection = result;
        return this;
    },
    values: function (func) {
        for(var key in this.collection){
              func(this.collection[key],key);
           }
        return this;
    },
    keys: function () {
        var result = [];
        for(var key in this.collection){
               result.push(key);
           }
        this.collection = result;
        return this;
    },
    filter: function(func) {
        var result = []
        this.each(function (element, i) {
            if(func(element, i)) {
                result.push(element);
                }
        });
        this.collection = result;
        return this;
    },
    reduce: function (func) {
        var temp;
        this.each(function (element, i) {
            if (i === 0) {
                temp = element;
            }else {
                temp = func(temp,element);
            }
        });
        return temp;
    },
    exist: function (num) {
        var result = false;
        this.each(function (element) {
            if (num === element) {
                result = true;
            }
        });
        return result;
    },
    first: function (func) {
        if (func !== undefined) {
            var first;
            return first = this.filter(func).first();
        }
        var first_item;
        this.reduce(function (num_a,num_b) {
            first_item = num_a;
            return num_a;
        });
        return first_item;
    },
    last: function (func) {
        if (func !== undefined) {
            var last;
            return last = this.filter(func).last();
        }
        var last_item;
        this.reduce(function (num_a,num_b) {
            last_item = num_b;
            return num_b;
        });

        return last_item;
    },
    max: function () {
        var max_num;
    	this.reduce(function(num_a,num_b){
    		if (num_a > num_b) {
    			max_num = num_a;
    		}else{
    			max_num = num_b;
    		}
    		return max_num;
    	});
    	return max_num;
    },
    min: function () {
        var min_num;
    	this.reduce(function(num_a,num_b){
    		if (num_a < num_b) {
    			min_num = num_a;
    		}else{
    			min_num = num_b;
    		}
    		return min_num;
    	});
    	return min_num;
    },
    sum: function () {
        var sum = 0;
        this.reduce(function(num_a,num_b){
            sum = num_a + num_b;
            return sum;
        });
        return sum;
    },
    average: function (func) {
        var filter_array = [];
        if (func !== undefined) {
            this.collection = this.filter(func).value();
            return this.sum()/filter_array.length;
        }
        if (this.collection.length === 1) {
            return this.collection[0];
        }
        return this.sum()/this.collection.length;
    },
    array_sort: function (func) {
       var result = this.filter(function (element) {
           return true;
       }).value();
       each(result,function (element_a,i_a) {
           var to_each = filter(result,function (element,i) {
               return i > i_a;
           });
           each(to_each,function (element_b,i_b) {
               if (func(result[i_a],result[i_a + i_b + 1])) {
                  var temp = result[i_a];
                   result[i_a] = result[i_a + i_b + 1];
                   result[i_a + i_b + 1] = temp;
               }
           });
       });
       this.collection = result;
       return this;
    },
    cal_median: function () {
        var median_num = 0;
        var LENGTH = this.collection.length;
        if (LENGTH%2 === 0) {
            median_num = (this.collection[LENGTH/2-1] + this.collection[LENGTH/2])/2;
          }else {
              median_num = this.collection[(LENGTH + 1)/2 - 1];
          }
        return median_num;
    },
    range: function (num_a,num_b) {
        var result = [];
        if (num_a < num_b) {
            for (var i = num_a; i <= num_b; i++) {
                result.push(i);
            }
        }else {
            for (var j = num_a; j >= num_b; j--) {
                result.push(j);
            }
        }
        this.collection = result;
        return this;
    },
    flatten: function () {
        var result = [];
        this.each(function (element,i) {
            if (element.length === undefined) {
                result.push(element);
            }
            for (var j = 0;element.length !== undefined && j < element.length; j++) {
                if (element[j].length === undefined) {
                    result.push(element[j]);
                }
            }
        });
        this.collection = result;
        return this;
    },
    group: function (func) {
        var temp = {};
        this.each(function (element, i) {
            temp[func(element)] = temp[func(element)] || [];
            temp[func(element)].push(element);
        });
        this.collection = temp;
        return this;
    },
    num_group: function (func) {
        var temp = {};
        this.each(function (element, i) {
            temp[func(element)] = temp[func(element)] || 0;
            temp[func(element)]++;
        });
        this.collection = temp;
        return this;
    },
    num_map_letter: function () {
        var letters = 'zabcdefghijklmnopqrstuvwxyz';
        var LETTERS_LENGH = 26;
        var result = [];
        this.each(function (element) {
            if (element / LETTERS_LENGH > 1) {
                var first_letter = letters.charAt((Math.ceil(element / LETTERS_LENGH))-1);
                var second_letter = letters.charAt(element%LETTERS_LENGH);
                result.push(first_letter + second_letter);
            }else {
                result.push(letters.charAt(element));
            }
        });
        this.collection = result;
        return this;
    },
    findWhere: function (items) {
        var result;
        if (Array.isArray(this.collection)) {
            this.each(function (element, i) {
                if (items['barcode'] === element) {
                    result = element;
                }
            });
        }
        this.each(function (element, i) {
            if (items['barcode'] === element.barcode) {
                result = element;
            }
        });
        return result;
    },
    get_num_map_letter: function (element) {
        var letters = 'zabcdefghijklmnopqrstuvwxyz';
        var LETTERS_LENGH = 26;
        var result;
        if (element / LETTERS_LENGH > 1) {
            var first_letter = letters.charAt((Math.ceil(element / LETTERS_LENGH))-1);
            var second_letter = letters.charAt(element%LETTERS_LENGH);
            result = first_letter + second_letter;
        }else {
            result = letters.charAt(element);
        }
        this.collection = result;
        return this;
    },
    get_charcode: function () {
        var result = [];
        this.each(function (element) {
             result.push(String.fromCharCode(element+96));
        });
        this.collection = result;
        return this;
    },
    no_repeat: function (collection) {
        var result = [];
        if (collection != undefined) {
            this.each(function(element){
                if (_(collection).exist(element)) {
                    result.push(element);
                }
            });
        }else {
            this.each(function(element){
                if (!_(result).exist(element)) {
                    result.push(element);
                }
            });
        }
        this.collection = result;
        return this;
    },
    repeat: function (collection) {
        var result = [];
        if (collection != undefined) {
            this.each(function(element){
                if (!_(collection).exist(element)) {
                    result.push(element);
                }
            });
        }else {
            this.each(function(element){
                if (_(result).exist(element)) {
                    result.push(element);
                }
            });
        }
        this.collection = result;
        return this;
    },
    first_index: function (element_index) {
        var index = 0;
        var flag = true;
        this.each(function (element,i) {
            if (element === element_index && flag) {
                index = i;
                flag = false;
            }
        });
        return index;
    },
    last_index: function (element_index) {
        var index = 0;
        this.each(function (element,i) {
            if (element === element_index) {
                index = i;
            }
        });
        return index;
    },
    value: function() {
        return this.collection;
    }
}
module.exports = _;
