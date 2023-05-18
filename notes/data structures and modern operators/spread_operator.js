/***
 * can use to unpack all array elements at once
 * doesn't affect the original array
 */

const arr = [7,8,9];
const addElements = [1, 2, ...arr]; // expands all the elements of arr into the new array

console.log(...addElements); // rather than logging the array literal, will log each individual element of the array separately

// NOTE in JS can iterate arrays, strings, maps and sets but NOT objects - can't stick an object in a for loop
// so could use spread operator on a string, since you can use it on anything iterable

const str = 'Jonas';
const letters = [...str]; // contains an array of all the characters in the string

// can pass spread to function to pass all function arguments in one go, as long as they are in order

function timestwo(item1, item2, item3) {
   console.log(item1 * 2, item2 * 2, item3 * 3);
}

timestwo(...arr);

// can use spread operator with objects to shallow copy them even though they are not literaly in the latest versions of javascript

