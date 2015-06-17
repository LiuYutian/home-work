function Person(name, gender
    this.name = name;
    this.gender = gender;
    this.introduce = function (){
        return "My name is "+ this.name +".I am a Person";
    }
}
VM435:3 Uncaught SyntaxError: Unexpected token this
    at Object.InjectedScript._evaluateOn (<anonymous>:905:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:838:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)InjectedScript._evaluateOn @ VM430:905InjectedScript._evaluateAndWrap @ VM430:838InjectedScript.evaluate @ VM430:694
function Person(name, gender){
    this.name = name;
    this.gender = gender;
    this.introduce = function (){
        return "My name is "+ this.name +".I am a Person";
    }
}
undefined
var a = new Person("Tom" "male");
VM525:2 Uncaught SyntaxError: missing ) after argument list
    at Object.InjectedScript._evaluateOn (<anonymous>:905:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:838:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)InjectedScript._evaluateOn @ VM430:905InjectedScript._evaluateAndWrap @ VM430:838InjectedScript.evaluate @ VM430:694
var a = new Person("Tom", "male");
undefined
a
Person {name: "Tom", gender: "male"}
a.introduce();
"My name is Tom.I am a Person"
var b = new Person("Jerry", "male");
undefined
b.introduce()
"My name is Jerry.I am a Person"
b.introduce == a.introduce
false
function Person(name, gender){
    this.name = name;
    this.gender = gender;

}

Person.prototype.introduce = function (){
        return "My name is "+ this.name +".I am a Person";
}

Person.introduce()
var a = new Person("Tom", "male");
undefined
var b = new Person("Jerry", "male");
undefined
b.introduce == a.introduce
true
b.introduce()
"My name is Jerry.I am a Person"
a.introduce();
"My name is Tom.I am a Person"
Person.prototype.introduce = function(){return ""}
Person.introduce()
a.introduce();
""
b.introduce();
""
b.introduce = function(){return "b"}
b.introduce()
a.introduce()
""
Person.prototype.introduce
Person.introduce()
b.introduce();
"b"
