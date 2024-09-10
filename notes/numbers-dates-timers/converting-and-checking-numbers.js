// in JS all numbers are represented internally as floating point (decimal) numbers
// converting binary to base 10 numbers can give some weird results like 0.1 + 0.2 = 0.30000000000004
// DO NOT DO REALLY PRECISE OR SCIENTIFIC CALCULATIONS IN JAVASCRIPT

// to convert string to number
console.log(Number('23'));
console.log(+'23'); // when JS sees a numerical operator like + it will automatically convert whatever follows to a number

// parsing
console.log(Number.parseInt('30px')); // will extract the integer 30 from the string as long as the string STARTS with a number
console.log(Number.parseFloat('2.5rem')); // will return decimal number 2.5
console.log(Number.parseInt('2.5')); // will just return 2, doesn't do any kind of rounding

// parse int and parsefloat are global functions so can just write...
console.log(parseInt('30px')); // etc.

// check if a value is a number
console.log(Number.isNaN(20)); // returns false
console.log(Number.isNaN(23 / 0)); // returns false but the number is infinity....
console.log(Number.isNaN('23')); // returns true

console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(20)); // true