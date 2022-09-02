/**
 * an object literal is just a series of key-value pairs, which can include methods
 * dog.bark() would call the bark() method
 * can also use bracket notation like dark[animal] - easier to pass variables this way to pass dynamic properties, or if you need to have spaces inside the key
 */

const earnie = { // encapsulation - consolidating an object's properties and methods into a package and attaching it to a variable
    animal: 'dog',
    age: 1,
    breed: 'pug',
    bark: function () { console.log('woof!'); },
    birthday: function () {
        this.age++; // to increment the age of this specific instance of the earnie object
    }
}

var prop = 'breed';
console.log(earnie[prop]);

// to set a property

earnie.age = 2;
earnie.color = 'black'; // can add new properties this way