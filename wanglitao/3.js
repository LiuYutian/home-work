function Person(){
  this.name = "women"
}
Person.prototype.sayWhat = function(){
  return this.name + ":i`m a girl!";
}
function Student(){
  this.subname = "your sister";
}
Student.prototype = new Person();
Student.prototype.subSayWhat = function(){
  return this.subname + ":i`m a beautiful girl";
}
var sub = new Student();
console.log(sub.sayWhat());//women:i`m a girl!
Person原型对象等于另一个类型的实例new Person()此时，
Student原型对象包含一个指向Person原型的指针，Person原型中也包含一个
指向Person构造函数的指针。。。这样层层递进下去，就形成了一个原型链。
