/***
 * all objects in javascript have setter and getter properties
 * they are called accessor properties because they access a value
 * 
 * useful to manipulate parts of properties or when you need to transform a property in some way before returning it
 * also very useful for data validation
 */

// simple object literal

const account = {
    owner: 'Jonas',
    movements: [200, 520, 120, 300],

    get latest() {
        return this.movements.pop();
    },

    set latest(newMovement) {
        this.movements.push(newMovement);
    }
}

console.log(account.latest); // write it as if it was a property, even though it is a method

account.latest = 50; // this is to use the setter

// class example

class Person {
    constructor(fullName, birthYear) { // will be called whenever the New operator is called
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    get age() {
        return 2023 - this.birthYear;
    }

    // this will be run every time someone tries to change the fullName property
    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name; // have to use underscore to avoid the max call stack exceeded error
        }
        else {
            alert(`${name} is not a full name`);
        }
    }

    // have to have this get because otherwise the Person will only have the property _fullName, not fullname
    get fullName() {
        return this._fullName;
    }
}

const jessica = new Person('Jessica Davis', 1991);
console.log(jessica.age);

const walter = new Person('Walter', 1965); // this will show the alert



