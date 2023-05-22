/***
 * this is inheritance from parent classes to child classes, not prototypal inheritance between objects and their class prototype
 * 
 * 
 * 
 */

// constructor functions

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2023 - birthYear);
}

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear); // links 'this' student to the Person
    this.course = course;
}

const mike = new Student('Mike', 1994, 'Computer Science');

// BUT this hasn't really linked the prototype of studen to the prototype of person, so couldn't use the calcAge method
// have to do this with Object.create

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
// have to create this connection BEFORE you add any more methods to Student, otherwise the prototypes will be overwritten

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

mike.introduce();
mike.calcAge();

// this is all quite messy though.... 
// ES6 classes version

class PersonCl {
    constructor(firstName, birthYear) { // will be called whenever the New operator is called
        this.fistName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2023 - birthYear);
    }
}

const jessica = new PersonCl('Jessica', 1991);
jessica.calcAge();

class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course) {
        super(firstName, birthYear); // this adds in all the elements of the constructor of the parent class
        // super function always has to be first because it creates the this keyword
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }

    calcAge() { // this method will overwrite the one from the parent class
        console.log(`I am ${2023 - this.birthYear} but I feel a lot older because I'm a student!`);
    }
}

const martha = new StudentCl('Martha', 2002, 'Computer Science');
martha.introduce();
martha.calcAge();

// doing the same thing with object.create()

const PersonProto = { 
    calcAge() {
        console.log(2023 - this.birthYear);
    },

    init(firstName, birthYear) { 
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.course = course;
};
StudentProto.introduceSelf = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}


const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Art History');
jay.calcAge();
jay.introduceSelf();

// personproto is now in jaw's prototype chain, but so is studentproto where we can add extra stuff



