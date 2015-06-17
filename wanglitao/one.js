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
    value:function(){
        return this.collection;
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
}

var a = [1, 5 ,3, 3, 2 ,1];
var b = _(a).sort(function(a,b){
    return a > b;
}).value();
console.log(b);
