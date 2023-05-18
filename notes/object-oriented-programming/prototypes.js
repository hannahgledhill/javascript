/***
 * constructor functions can create prototypes
 * all instances will have access to the prototypes properties functions
 * 
 */

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2023 - birthYear);
}

console.log(Person.prototype); // would show the calcAge function and the constructor function (ignore)

const jonas = new Person('Jonas', 1991); 
console.log(jonas.calcAge()); // we can call the method without needing to copy it to each instance. there is only one copy of the function that all linked objects have access to
console.log(jonas.__proto__); // this would show you the props and method that the linked prototype has, equiv to doing console.log(Person.prototype)
console.log(Person.prototype.isPrototypeOf(jonas)); // would return true

// can also set properties on the prototype

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species); // is useful because you can declare it afterwards, BUT, it will be the same for ALL instances, cant have its own values
console.log(jonas.hasOwnProperty(species)); // false, it only has access to it because of the prototypal inheritance

// can even use prototype methods to extend built in objects

Array.prototype.unique = function () {
    return [...new Set(this)];
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(arr.unique); // calls the unique function with the arr array bound to this, but be careful in case a later version of javascript implements a method with the same name that would overwrite yours and cause unexpected errors

/***
 * remember all DOM elements are also objects which have prototypes, properties and methods, constructor functions etc.
 */