/***
 * no prototpe properties, constructor functions or new function
 * can set the prototype of an object to any other object we want
 * least used in practise, but can be used to create inheritance BETWEEN classes
 * 
 * 
 */

const PersonProto = { // prototype function contains all the methods and props we want instances to be able to inherit
    calcAge() {
        console.log(2023 - this.birthYear);
    },

    init(firstName, birthYear) { // this will let us neatly initiate the object programatically without having to set each prop manually
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

// we will now create our object and assign PersonProto as its prototype

const steven = Object.create(PersonProto); // we will create an empty object steven linked to PersonProto as its prototype
steven.firstName = 'Steven';
steven.birthYear = 1991;

steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1993);