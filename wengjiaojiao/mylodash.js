function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}
function each(collection,fun) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            fun(collection[i], i);
        }
    }else {
        for (var key in collection) {
            fun(collection[key], key);
        }
    }
}
_.each = each;

_.prototype = {
    contructor:_,
    each:function(fun) {
        for (var i = 0; i < this.collection.length; i++) {
            fun(this.collection[i], i);
        }
    },
    map:function(fun) {
        var result = [];
        this.each(function(n) {
            result.push(fun(n));
        });
        this.collection = result;
        return this;
    },
    filter:function(fun) {
        var result = [];
        this.each(function(n, i) {
            if(fun(n, i)) {
                result.push(n);
            }
        });
        this.collection = result;
        return this;
    },
    reduce:function(fun) {
        var result = this.collection[0];
        this.each(function(n, i) {
            if(i === 0) {
                result = n;
            }else {
                result = fun(result,n);
            }
        });
        this.collection = result;
        return this;
    },
    first:function() {
        this.reduce(function(a, b) {
            return a;
        });
        return this;
    },
    last:function() {
        this.reduce(function(a, b) {
            return b;
        });
        return this;
    },
    sum:function() {
        this.reduce(function(a, b) {
            return a + b;
        });
        return this;
    },
    max:function() {
        this.reduce(function(a, b) {
            var max;
            if(a < b) {
                max = b;
                return b;
            }else {
                max = a;
                return a;
            }
        });
        return this;
    },
    min:function() {
        this.reduce(function(a, b) {
            var min;
            if(a > b) {
                min = b;
                return b;
            }else {
                min = a;
                return a;
            }
        });
        return this;
    },
    range:function(a, b) {
        var result = [];
        if(a != b) {
            var step = Math.abs(b - a) / (b - a);
            var count = (b - a) / step;

            for(var i = 0; i <= count; i++) {
                var item = a + i *step;
                result.push(item);
            }
        }else {
            result.push(a);
        }
        return result;
    },
    exist:function(element) {
        var result = false;
        this.each(function(n, i) {
            if(n === element) {
                result = true;
            }
        });
        return result;
    },
    indexof:function(element) {
        var result = 0;
        var exist = true;
        this.each(function(n, i) {
            if(n === element && exist) {
                result = i;
                exist = false;
            }
        });
        return result;
    },
    last_indexof:function(element) {
        var result = true;
        this.each(function(n, i) {
            if(n === element) {
                result = i;
            }
        });
        return result;
    },
    median:function() {
        this.collection = _.median(this.collection);
        return this;
    },
    rank:function(fun) {
        this.collection = _.rank(this.collection,fun);
        return this;
    },
    value:function() {
        return this.collection;
    }
}
_.num_to_letter = function(n){
    var f = ["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z"];
    var s = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
    "q","r","s","t","u","v","w","x","y","z"];
    var x = (n - 1) % 26;
    var y = parseInt((n -1) / 26);
    return result = (f[y]+s[x]);
},
_.median = function(collection) {
    var median;
    var middle = parseInt(collection.length / 2);

    if(collection.length % 2 ===0) {
        median = (collection[middle] + collection[middle - 1]) / 2;
    }else {
        median = collection[middle];
    }
    return median;
}
_.rank = function(collection, fun) {
    var array = [];
    each(collection,function(n, i) {
        array.push(n);
    });
    var number;
    each(array, function(n_a,i_a) {
        each(array,function(n_b, i_b) {
            if(i_a < i_b && fun(array[i_a],array[i_b])) {
                number = array[i_a];
                array[i_a] = array[i_b];
                array[i_b] = number;
            }
        });
    });
    return array;
}
module.exports = _;
