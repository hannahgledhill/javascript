/**
 * object literals are fine for only 1 instance of an object, if you need to have multiple instances should have a class
 * advantage is you can add new properties and methods to the class and all instances of the class can use those properties and methods - so wherever the slider component is being used on the site etc.
 * 
 * constructor method lets you create different properties for each instance of the object
 * this refers to the instance of the object that has been instantiated
 * 
 */

class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal; // set properties equal to parameter from constructor, or could hard code a value that will always be true
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    speak() {
        console.log(this.sound);
    }
}

const ernie = new Pet('dog', 1, 'pug', 'woof'); // instantiating the Pet class
const vera = new Pet('dog', 8, 'border collie', 'raff!!');

ernie.speak();
vera.speak();