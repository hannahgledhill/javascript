/***
 * constructor functions mean you can create many instances without needing to procedurally define each instance
 * always start with capital letter
 * can't use arrow functions because won't have the this keyword
 * 
 * 
 */

'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // DON'T DO THIS because that method would be copied in full to all the instances whch is really wasteful of memory and resources, this is where prototypes and prototypal inheritance comes in
    this.calcAge = function() {
        console.log(2023 - birthYear);
    }
}

const jonas = new Person('Jonas', 1991); // creates a new empty option, sets the this keyword to the newly created object, new object is linked to the prototype and automatically returned
console.log(jonas);
console.log(jonas.birthYear);

console.log(jonas instanceof Person); // will return either true or false, in this case true


