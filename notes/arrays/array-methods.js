/**
 * methods are simply functions attached to objects, since arrays have methods arrays are also objects
 * 
 */

// slice
let arr = ['a','b','c','d','e'];

console.log(arr.slice(2)); // returns a new array with only the extracted parts, returns c, d and e
console.log(arr.slice(2,4)); // end param is not included so this will just return c and d
console.log(arr.slice(-2)); // will take the last 2, d and e
console.log(arr.slice(-1)); // will return the last element
console.log(1, -2); // will extract everything EXCEPT the last 2 elems
console.log(arr.slice()); // creates a shadow copy of the array, can also be done using spread operator console.log([...arr]) but slice is more useful if you want to chain multiple methods together

// splice - same as slice but does actually mutate the original array
console.log(arr.splice(2)); // returns c, d and e
console.log(arr); // see that the extracted elements have been REMOVED from the original array, so this returns only a and b
// splice can be used to remove one or more elements from an array
let end = arr.splice(-1); // removes last element from the array and returns it

// reverse
const arr2 = ['j','i','h','g','j'];
console.log(arr2.reverse()); // mutates the original array, reversing its order
console.log(arr2);

// concat - used to concat 2 arrays
const letters = arr.concat(arr2); // adds arr 2 to the end of arr 1
console.log(letters); // orig arrays are not mutated
console.log([...arr, ...arr2]); // achieves the same thing, but remember .concat is useful if want to chain methods

// join
console.log(letters.join(' - ')); // joins all the elements of an array into a string using the given separator

// at
const arr3 = [23, 11, 64];
console.log(arr[0]); // this is what the at method does but it is a method so it can be chained more easily
console.log(arr.at(0)); // returns 23

console.log(arr[arr.length - 1]); // this is how we would have to reference the last element the old way
console.log(arr.at(-1)); // this is much easier
console.log(arr.slice(-1)[0]); // also works but a bit more messier because it still returns an array with only one element which we then have to access with square brackets

// can also use at on strings

console.log('jonas').at(0); // returns j
console.log('hanna').at(-1); // returns a