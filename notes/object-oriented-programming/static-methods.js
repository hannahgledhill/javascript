/***
 * Array.from() is attached to the Array constructor function, not to the prototype function
 * so any arrays you create don't have a from function
 * the only way to call the from function is to call it from Array.from()
 * we say the from function is from the array's "namespace", like Number.parseFloat()
 * this is what a static method is
 * they are usually used as helper functions
 * 
 * 
 */

class Person {
    constructor(firstName, birthYear) { // will be called whenever the New operator is called
        this.fistName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2023 - birthYear);
    }

    static greet() {
        console.log('hello!');
    }
}

const jessica = new Person('Jessica', 1991);
jessica.calcAge();

Person.wave = function() { // because it doesn't use the prototype it will not be inherited by jessica, you can only call it from Person.wave()
    console.log('hello!');
}

Person.wave();
Person.greet();