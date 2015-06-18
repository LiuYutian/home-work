
function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}

_.prototype = {
    contructor: _,

    each:function(func) {//循环
        for (var i = 0; i < this.collection.length; i++) {
            func(this.collection[i],i);
        }
    },
    filter: function(fn) {//过滤
        var result = [];
        this.each(function(collection,i){
            if(fn(collection, i)) {
                result.push(collection);
            }
        });
        this.collection = result;
        return this;
    },
    first:function (func) {//第一个元素。
        var result = [];
        for (var i = 0; i < this.collection.length; i++) {
            result[i] = this.collection[i];
        }
        if (func !== undefined) {
            result = this.filter(func);
            this.collection = result;
        }
        var first_item;
        this.reduce(function (num_a,num_b) {
            first_item = num_a;
            return num_a;
        });
        this.collection = first_item;
        return this;
    },
    last:function (func) {//最后一个元素。
        var result = [];
        for (var i = 0; i < this.collection.length; i++) {
            result[i] = this.collection[i];
        }
        if (func !== undefined) {
            result = this.filter(func);
            this.collection = result;
        }
        var first_item;
        this.reduce(function (num_a,num_b) {
            first_item = num_b;
        });
        this.collection = first_item;
        return this;
    },
    reduce: function (func) {//取数组中两个元素。
        var temp;
        this.each(function(collection,i){
            if (i === 0) {
                temp = collection;
            }else {
                temp = func(temp,collection);
            }
        });
    },

    exist:function(num) {//判断一个数是否存在一个数组中。
        var result = false;
        this.each(function (collection,i) {
            if (collection === num) {
                result = true;
            }
        });
        this.collection = result;
        return this;
    },


    max:function () {//最大值
        var result;
        this.reduce(function (num_a,num_b) {
            result = num_a > num_b ? num_a : num_b;
            return result;
        });
        this.collection = result;
        return this;
    },
    min:function () {//最小值
        var result;
        this.reduce(function (num_a,num_b) {
            result = num_a < num_b ? num_a : num_b;
            return result;
        });
        this.collection = result;
        return this;
    },
    rank:function (func){//排序
        var array = 0;
        var result = [];
        for (var i = 0; i < this.collection.length; i++) {
            result[i] = this.collection[i];
        }
        for (i = 0; i < result.length; i++) {
            for (var j = i+1; j <result.length; j++) {
                if (func(result[i],result[j])) {
                    array=result[i];
                    result[i]=result[j];
                    result[j]=array;
                }
            }
        }
        this.collection = result;
        return this;
    },


    sum:function () {//求和
        var result;
        this.reduce(function (num_a,num_b) {
            result = num_a + num_b;
            return result;
        });
        this.collection = result;
        return this;
    },

    mean:function(){//平均数
        var sum = 0;
        for (var i = 0; i < this.collection.length; i++) {
            sum += this.collection[i];
        }
        this.collection = sum/this.collection.length;
        return this;
    },
    median:function(){//中位数。
        var number = 0;
        var k;
        if ((this.collection.length)%2===0) {
            k = (this.collection.length)/2;
            number=(this.collection[k]+this.collection[k-1])/2;
        }else {
            k = (this.collection.length-1)/2;
            number=this.collection[k];
        }
        this.collection = number;
        return this;
    },

    map: function(fn) {//映射
        var result = [];
        this.each(function(collection,i){
            result.push(fn(collection, i));
        });
        this.collection = result;
        return this;
    },

    value: function() {
        return this.collection;
    }
};
module.exports = _;

var temp = _([1,2,3]).map(function(val) {
    return val + 3;
}).filter(function(val) {
    return val > 3;
}).value();

var array = _([1,2,3,4,5,9,8,7,6]).rank(function(a,b){
    return a>b;
}).value();

var array_a =  _([1,2,3,4,5,9,8,7,6]).min().value();

var coll = _([5,1,2,3,4,5,6,7,8,9]).first().value();
