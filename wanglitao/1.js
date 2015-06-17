function Person(name, gender){
    this.name = name;
    this.gender = gender;
    this.introduce = function (){
        return "My name is "+ this.name +".I am a Person";
    }
}
function Person(name, gender){
    this.name = name;
    this.gender = gender;

}

Person.prototype.introduce = function (){
        return "My name is "+ this.name +".I am a Person";
}

Person.prototype.a = function(){

}

function Student(name, gender, class){
    //Person.apply(this, name, gender);
    this.class = class;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

//Student.prototype.pop(Person.prototype.a);
Student.prototype.a = null;    
