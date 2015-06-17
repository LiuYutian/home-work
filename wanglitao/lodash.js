function each(array,item) {
    for(var i = 0 ; i < array.length; i++) {
        item(array[i],i);
    }
}
function _(collection) {
    if(!(this instanceof _)) {
        return new _(collection);
    }
    this.collection = collection;
}
_.each = each;
_.prototype = {
    each:function(fn) {
        each(this.collection, fn);
    },
    map:function(fn) {
      var result = [];
      this.each(function(n, i){
        result.push(fn(n,i))
      });
      this.collection = result;
      return this;
    },
    filter:function(operate){
      var result = [];
      this.each(function(n,i){
        if(operate(n,i)){
          result.push(n);
        };
      });
      this.collection = result;
      return this;
    },
    reduce:function(operate) {
        var result = [];
        this.each(function(n,i){
            if(i === 0) {
                result = n;
            }else{
                result = operate(result,n);
            }
        });
        this.collection = result;
        return this;
    },
    sum:function( ) {
        return this.reduce(function(a,b){
          return a + b;
        });
    },
    max:function() {
        return this.reduce(function(a,b){
            Math.max(a,b);
            return b;
        });
    },
    min:function() {
        return this.reduce(function(a,b){
            Math.min(a,b);
            return a;
        });
    },
    first:function() {
        this.collection = this.reduce(function(a,b){
            return a;
        }).value();
        return this;
    },
    last:function() {
        this.collection = this.reduce(function(a,b){
            return b;
        }).value();
        return this;
    },
    range:function(number_a,number_b){
        var result = [];
        var section = Math.abs(number_a-number_b);
        for(var i = 0; i <= section; i++) {
            if(number_a >= number_b) {
                result.push(number_a--);
            }else{
                result.push(number_a++);
            }
        }
        this.collection = result;
        return this;
    },
    exist:function(element) {
        var result = false;
        this.each(function(n,i){
            if(n === element) {
                result = true;
            }
        });
        this.collection = result;
        return this;
    },
    sort:function(operate) {
        var result = [];
        _.each(this.collection,function(n,i){
            result.push(n);
        });
        _.each(result,function(n,i){
            _.each(result,function(m,j){
                if(i > j && operate(result[i],result[j])) {
                    var temp = result[i];
                    result[i] = result[j];
                    result[j] = temp;
                }
            });
        });
        this.collection = result;
        return this;
    },
    letter:function(number) {
        var unit = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var decade = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        return  number = decade[parseInt((number-1)/26)] + unit[(number-1)%26];
    },
    median:function() {
        if(this.collection.length%2 === 0) {
            return (this.collection[this.collection.length/2-1]+this.collection[this.collection.length/2])/2;
        }
        if(this.collection.length%2 != 0) {
            return this.collection[parseInt(this.collection.length/2)];
        }
    },
    no_repeat:function () {
        var result = [];

        _.each(this.collection,function(n,i){
            var exist = false;
            _.each(result,function(m,k){
                if(n === m) {
                    exist = true;
                }
            });
            if(!exist) {
            result.push(n);
            }
        });
        this.collection = result;
        return this;
    },
    count:function( ) {
        var result = [];
        this.each(function(n,i){
            result[n] = result[n]||0;
            result[n]++;
        });
        return result;
    },
    two_chang_one:function(collection) {
       var result = [];
       _.each(collection,function(n,i){
           if(collection[i].length === undefined) {
               result.push(collection[i]);
           }
           for(var j = 0;collection[i] != undefined && j < collection[i].length; j++) {
                   result[i+j]=collection[i][j];
           }
       });
       this.collection = result;
       return this;
    },
    value: function() {
       return this.collection;
   }
}
module.exports = _;
