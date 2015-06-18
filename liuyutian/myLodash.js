function myLodash(collection) {
    if(!(this instanceof myLodash)){
        return new myLodash(collection);
    }

    this.collection = collection;
}

function each(collection, fun){
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++) {
            fun(collection[i], i);
        }
    }else{
        for(var key in collection){
            if(collection.hasOwnProperty(key)){
                fun(collection[key], key)
            }
        }
    }
}

myLodash.prototype.each = function(fun){
    each(this.collection, fun);

    return this;
};

myLodash.each = each;

function map(collection, fun){
    var array = [];

    myLodash.each(collection, function(n, i){
        array.push(fun(n, i));
    });

    return array;
}

myLodash.prototype.map = function(fun){
    this.collection = map(this.collection, fun);

    return this;
}

myLodash.map = map;

function mapValues(collection, fun){
    myLodash.each(collection, function(value, key){
        collection[key] = fun(value, key);
    });

    return collection;
}

myLodash.prototype.mapValues = function(fun){
    return mapValues(this.collection, fun);
}

myLodash.mapValues = mapValues;

function mapKeys(collection, fun){
    myLodash.each(collection, function(value, key){
        collection[fun(value, key)] = value;
        delete collection[key];
    });

    return collection;
}

myLodash.prototype.mapKeys = function(fun){
    return mapKeys(this.collection, fun);
}

myLodash.mapKeys = mapKeys;

function filter(collection, fun){
    var array = [];

    myLodash.each(collection, function(n, i){
        if(fun(n, i)){
            array.push(n);
        }
    });

    return array;
}

myLodash.prototype.filter = function(fun) {
    this.collection = filter(this.collection, fun);

    return this;
}

myLodash.filter = filter;

function reduce(collection, fun){
    var result = 0;

    myLodash.each(collection, function(n, i){
        if(i === 0) {
            result = n;
        }else{
            result = fun(result, n);
        }
    });

    return result;
}

myLodash.prototype.reduce = function(fun){
    return reduce(this.collection, fun);
}

myLodash.reduce = reduce;

function first(collection, fun){
    if(typeof(fun) === 'function'){
        collection = myLodash.filter(collection, fun);
    }

    return myLodash.reduce(collection, function(a, b){
        return a;
    });
}

myLodash.prototype.first = function(fun){
    return first(this.collection, fun);
}

myLodash.first = first;

function last(collection, fun){
    if(typeof(fun) === 'function'){
        collection = myLodash.filter(collection, fun);
    }

    return myLodash.reduce(collection, function(a, b){
        return b;
    });
}

myLodash.prototype.last = function(fun){
    return last(this.collection, fun);
}

myLodash.last = last;

function range(number1, number2) {
    var length = Math.abs(number1 - number2);
    var array = [];

    for(var i = 0; i <= length; i++) {
        if(number1 >= number2){
            array.push(number1--);
        }else{
            array.push(number1++);
        }
    }

    return array;
}

myLodash.prototype.range = function(number){
    return range(this.collection, number);
}

myLodash.range = range;

function intersection(collection_a, collection_b){
    var result = [];

    myLodash.each(collection_a, function(n1){
        myLodash.each(collection_b, function(n2){
            if(n1 === n2) {
                result.push(n1);
            }
        });
    });

    return result;
}

myLodash.prototype.intersection = function(collection_a){
    this.collection = intersection(this.collection, collection_a);
    return this;
}

myLodash.intersection = intersection;

myLodash.getChar = function(number){
    var unit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var elses = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return result = elses[parseInt((number-1) / 26)] + unit[(number-1) % 26];
}

function concat(array_a, array_b) {
    var resultArray = [];

    myLodash.each(array_a, function(n){
        resultArray.push(n);
    });

    myLodash.each(array_b, function(n){
        resultArray.push(n);
    });
    return resultArray;
}

myLodash.prototype.concat = function(array){
    this.collection = concat(this.collection, array);
    return this;
}

myLodash.concat = concat;

function deWeight(collection){
    var temp = {};
    var array = [];

    myLodash.each(collection, function(n){
        temp[n+" "] = temp[n+" "] || 0;
    });

    myLodash.each(temp, function(n, i){
        array.push(parseInt(i.substring(0, i.length-1)));
    });

    return array;
}

myLodash.prototype.deWeight = function(){
    this.collection = deWeight(this.collection);
    return this;
}

myLodash.deWeight = deWeight;

function exist(collection, value){
    var bool = false;

    myLodash.each(collection, function(n){
        if(n === value){
            bool = true;
        }
    });

    return bool;
}

myLodash.prototype.exist = function(value) {
    return exist(this.collection, value);
}

myLodash.exist = exist;

function sort(srcArray, fun){
    var array = [];

    myLodash.each(srcArray, function(n){
        array.push(n);
    });

    myLodash.each(array, function(n1, i1){
        myLodash.each(array, function(n2, i2){
            if(fun(array[i1], array[i2])){
                var temp = array[i1];
                array[i1] = array[i2];
                array[i2] = temp;
            }
        });
    });

    return array;
}

myLodash.prototype.sort = function(fun){
    this.collection = sort(this.collection, fun);

    return this;
}

myLodash.sort = sort;

function median(array){
    array = myLodash(array).sort(function(a, b){
        return a > b;
    }).value();

    if(array.length % 2 === 0) {
        return (array[array.length/2-1]+array[array.length/2])/2;
    }else{
        return array[parseInt(array.length/2)];
    }
}

myLodash.prototype.median = function(){
    return median(this.collection);
}

myLodash.median = median;

myLodash.prototype.value = function(){
    return this.collection;
}

module.exports = myLodash;
