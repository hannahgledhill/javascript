/*

a map is a data structure we can use to map objects to keys
like associative arrays in php

in objects the keys always have to be strings, but in maps they can be any data type
so keys can be objects or arrays or even other maps

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lison, Portugal');

using the set method actually returns the map so can chain set methods

eg. 
rest
    .set('name', 'Classico Italiano')
    .set(1, 'Firenze, Italy')
    .set(2, 'Lison, Portugal')
    .set('open', 11);
    .set('close', 23);
    .set(true, 'We are open')
    .set(false, 'We are closed);

console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close')); // will evaluate to true orfalse

rest.delete(2);
rest.has('name'); // returns true or false
rest.size; // returns number of items
rest.clear; // removes all items from the map

can even set DOM elements as keys!
const heading = document.querySelector('h1');
rest.set(heading, 'Heading');
rest.get(heading);

can also create maps from objects

eg. const hoursMap = new Map(Object.entries[openingHours]);

ITERATING MAPS

const question = new Map([
    ['question', 'what is the best programming language?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again']
]);

for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

question.get(question.get('correct') === answer); // will evaluate to either true or false


can also convert maps to arrays
console.log([...question]);
creates a multidimensional array, but keys will be 0, 1, 2 etc.

also have methods question.keys(), returns an array of the keys
and question.values(), returns an array of the values
*/