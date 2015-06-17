function _(collection) {
    if (!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
};
var each = function(collection, func) {
    for (var i = 0; i < collection.length; i++) {
        func(collection[i], i);
    }
};
var filter = function(collection, func) {
    var result = [];
    each(collection, function(item, i) {
        if (func(item, i)) {
            result.push(item);
        }
    });
    return result;
};

_.prototype = {
    contructor: _,
    each: function(func) {
        for (var i = 0; i < this.collection.length; i++) {
            func(this.collection[i], i);
        }
    },
    filter: function(func) {
        var result = [];
        this.each(function(item, i) {
            if (func(item, i)) {
                result.push(item);
            }
        });
        this.collection = result;
        return this;
    },
    map: function(fun) {
        var result = [];
        this.each(function(collection, i) {
            result.push(fun(collection, i));
        });
        this.collection = result;
        return this;
    },
    reduce: function(func) {
        var temp;
        this.each(function(item, i) {
            if (i === 0) {
                temp = item;
            } else {
                temp = func(temp, item);
            }
        });
    },
    range: function(num_a, num_b) {
        var step = Math.abs(num_b - num_a) / (num_b - num_a);
        var count = (num_b - num_a) / step;
        var result = [];
        for (var i = 0; i <= count; i++) {
            result[result.length] = (num_a + i * step);
        }
        if (num_a === num_b) {
            result = [num_a];
        }
        this.collection = result;
        return this;
    },
    sum: function() {
        var result;
        this.reduce(function(num_a, num_b) {
            result = num_a + num_b;
            return result;
        });
        this.collection = result;
        return this;
    },
    max: function() {
        var result;
        this.reduce(function(num_a, num_b) {
            result = num_a > num_b ? num_a : num_b;
            return result;
        });
        this.collection = result;
        return this;
    },
    min: function() {
        var result;
        this.reduce(function(num_a, num_b) {
            result = num_a < num_b ? num_a : num_b;
            return result;
        });
        this.collection = result;
        return this;
    },
    first: function(func) {
        var result = [];
        if (func !== undefined) {
            result = this.filter(func).value();
            this.collection = result;
        }
        var first_item;
        this.reduce(function(item_a, item_b) {
            first_item = item_a;
        });
        this.collection = first_item;
        return this;
    },
    last: function(func) {
        var result = [];
        if (func !== undefined) {
            result = this.filter(func).value();
            this.collection = result;
        }
        var last_item;
        this.reduce(function(item_a, item_b) {
            last_item = item_b;
        });
        this.collection = last_item;
        return this;
    },
    exist: function(num) {
        var result = false;
        this.each(function(item) {
            if (item === num) {
                result = true;
            }
        });
        this.collection = result;
        return this;
    },
    flatten: function() {
        var result = [];
        this.each(function(item, i) {
            if (item.length === undefined) {
                result.push(item);
            }
            for (var x = 0; item.length !== undefined && x < item.length; x++) {
                if (item[x].length === undefined) {
                    result.push(item[x]);
                }
            }
        });
        this.collection = result;
        return this;
    },
    bubble_sort: function(func) {
        var item;
        var i, x;
        var result = this.filter(function(item) {
            return true;
        }).value();
        each(result, function(item_a, i_a) {
            var to_each = filter(result, function(item, i) {
                return i > i_a;
            });
            each(to_each, function(item_b, i_b) {
                if (func(result[i_a], result[i_a + i_b + 1])) {
                    item = result[i_a];
                    result[i_a] = result[i_a + i_b + 1];
                    result[i_a + i_b + 1] = item;
                }
            });
        });
        this.collection = result;
        return this;
    },
    get_median: function() {
        var len = this.collection.length;
        this.collection = len % 2 === 0 ? (this.collection[len / 2] + this.collection[len / 2 - 1]) / 2 : this.collection[(len - 1) / 2];
        return this;
    },
    value: function() {
        return this.collection;
    }
}


module.exports = _;
