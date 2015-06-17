
function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}

function each(collection,fun) {
    for (var i = 0; i < collection.length; i++) {
        fun(collection[i],i);
    }
}

_.prototype.each = function(fun) {
    each(this.collection,fun);
};

_.each = each;

_.prototype.map = function(fun) {
    var result = [];

    this.each(function(n,i) {
        result.push(fun(n));
    });
    this.collection = result;
    return this;
};

_.prototype.filter = function(fun) {
    var result = [];

    this.each(function(n,i) {
        if(fun(n,i)) {
            result.push(n);
        }
    });
    this.collection = result;
    return this;
};

_.prototype.reduce = function(fun) {
    var result;

    this.each(function(n,i) {
        if(i === 0) {
            result = n;
        } else {
            result = fun(result,n);
        }
    });
    this.collection = result;
    return this;
}

_.prototype.range = function(number_b) {
    var result = [];
    var step =  Math.abs(number_b - this.collection) / (number_b - this.collection);
    var count = Math.abs(number_b - this.collection);

    if(this.collection === number_b) {
        result.push(this.collection);
    } else {
        for(var i = 0; i <= count; i ++) {
            var num = this.collection + i * step;
            result.push(num);
        }
    }
    this.collection = result;
    return this;
}

_.prototype.intersection = function(collection) {
    var result = [];

    this.each(function(n) {
        _(collection).each(function(m) {
            if(n === m) {
            result.push(n);
            }
        });
    });
    this.collection = result;
    return this;
}

_.prototype.value = function() {
    return this.collection;
};

_.prototype.num_change_letter = function(num) {
    var f = ['','a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var s = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var x = (num - 1) % 26;
    var y = parseInt((num -1) / 26);
    return result = (f[y]+s[x]);
}

_.prototype.concat = function(collection_b) {
    var array = [];

    this.each(function(n) {
        array.push(n);
    });
    _(collection_b).each(function(m) {
        array.push(m);
    });
    this.collection = array;
    return this;
}

_.prototype.no_repeat = function() {
    var array = {};
    var result = [];

    this.each(function(n) {
        array[n + ' '] = array[n + ' '] || 0;
    });

    for(var key in array) {
        result.push(parseInt(key));
    }
    this.collection = result;
    return this;
}

_.prototype.is_exist = function(element) {
    var index = false;

    this.each(function(n) {
        if(n  === element) {
            index = true;
        }
    });
    return index;
}

function sort(collection,judge) {
    var array = [];

    _.each(collection,function(n,i) {
        array.push(n);
    });
    _.each(array,function(n,i_a) {
        var temp = 0;
        _.each(array,function(m,i_b) {
            if(i_a < i_b && judge(array[i_a],array[i_b])) {
                temp = array[i_b];
                array[i_b] = array[i_a];
                array[i_a] = temp;
            }
        })
    })
    return array;
}

_.prototype.sort = function(judge) {
    return sort(this.collection,judge);

    // var array = [];
    //
    // this.each(function(n,i) {
    //     array.push(n);
    // });
    // _.each(array,function(n,i_a) {
    //     var temp = 0;
    //     _.each(array,function(num,i_b) {
    //         if(i_a < i_b && judge(array[i_a],array[i_b])) {
    //             temp = array[i_b];
    //             array[i_b] = array[i_a];
    //             array[i_a] = temp;
    //         }
    //     })
    // })
    // this.collection = array;
    // return this;
}
_.sort = sort;

function median(collection) {
    var collection = this.sort(function(a,b) {
    return a > b;
}).value();
var result = 0;
var len = parseInt(collection.length / 2);
var len_2 = parseInt(collection.length / 2 - 1);

if(collection.length % 2 === 0) {
    result = (collection[len] + collection[len_2]) / 2 ;
} else {
    result = collection[len];
}
return result;
}

_.prototype.median = function() {
    var collection = this.sort(function(a,b) {
    return a > b;
}).value();
var result = 0;
var len = parseInt(collection.length / 2);
var len_2 = parseInt(collection.length / 2 - 1);

if(collection.length % 2 === 0) {
    result = (collection[len] + collection[len_2]) / 2 ;
} else {
    result = collection[len];
}
return result;
}

module.exports = _;
