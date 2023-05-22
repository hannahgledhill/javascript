/***
 * implement prototypal inheritance behind the scenes but using a more familiar syntax to other programming languages
 * all methods will be on the PROTOTYPE, not on the instantiated objects :)
 * so just looks neater because you don't have to use the .prototype property
 */

// class expression
const PersonCl = class {

}

// class declaration
class Person {
    constructor(firstName, birthYear) { // will be called whenever the New operator is called
        this.fistName = firstName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2023 - birthYear);
    }
}

const jessica = new Person('Jessica', 1991);
jessica.calcAge();

// can still use the prototype to add new methods 

Person.prototype.greet = function() {
    console.log(`Hello ${this.firstName}`);
}

/***
 * classes are NOT hoisted, so have to delcare them before they are used in the code
 * classes are first class citizens, can pass them into functions and return them from functions
 * the body of a class is always executed in strict mode, even if it is not activated at the start of the script
 * 
 */

class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account! ${this.owner}`); // this will be printed to the console whenever a new account is created
    }

    // these methods are the public interface, can be called from instances of the object
    deposit(val) {
        this.movements.push(val);
    }

    withdrawal(val) {
        this.deposit(val * -1);
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            console.log('loan approved');
        }
    }
}

const acc = new Account('Jonas', 'EUR', 1111);

// really bad to interract with properties like this, better to use a method
// acc.movements.push(250);
// acc.movements.push(-140);

acc.deposit(250);
acc.withdrawal(140);

// BUT several properties and methods like the pin shouldn't be accessible outside the class, this is where encapsulation and protected properties come in