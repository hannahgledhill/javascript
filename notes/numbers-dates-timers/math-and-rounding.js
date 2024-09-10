// square root
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); // exponential operator
console.log(8 ** (1 / 3)); // cubic root

// max
console.log(Math.max(5, 18, 23, 11, 2)); // gives 23
console.log(Math.max(5, 18, '23', 11, 2)); // still gives 23
console.log(Math.max(5, 18, '23px', 11, 2)); // will return NaN

// min
console.log(Math.max(5, 18, 23, 11, 2)); // gives 2

// radius
console.log(Math.PI * Number.parseFloat('10px') ** 2); // the ** 2 will square

// random numbers
console.log(Math.random()); // number between 0 and 1
console.log(Math.floor(Math.random() * 6) + 1); // values between 1 and 6, removing any decimals

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);
console.log(randomInt(10, 20));

// rounding integers
console.log(Math.trunc(23.3)); // simply removes decimal part and returns 23
console.log(Math.round(23.9)); // returns 24
console.log(Math.round(23.3)); // returns 23

console.log(Math.ceil(23.3)); // always rounds up, 24
console.log(Math.floor(23.9)); // always rounds down, 23

// floor and trunc both cut off the decimal part when dealing with +ve numbers but not -ve
console.log(Math.trunc(-23.3)); // returns -23
console.log(Math.floor(-23.9)); // returns -24

// rounding decimals
console.log((2.7).toFixed(0)); // returns the STRING 3
console.log((2.345).toFixed(2)); // returns STRING 2.35
console.log(+(2.345).toFixed(2)); // returns NUMBER 2.35 because of the +

// remainder - returns the remainder of a division
console.log(5 % 2); // returns 1

// can be used to check whether a number is even or odd
console.log(11 % 2); // returns 1
console.log(6 % 2); // returns 0, remainder of an even number would always be 0

const isEven = n => n % 2 === 0 ? true : false;
console.log(isEven(8)); // returns true
console.log(isEven(23)); // returns false
// can also be used to select every 2nd row (ie. the even rows) in a nodelist array

const divideByThree = n => n % 3 === 0 ? true : false; // check if a number is divisible by 3 or do every 3rd time etc.
if (divideByThree) { Element.style.color = '###'; } // etc

// numeric separators - used for really large numbers
const diameter = 287_460_000_000; // JS engine ignores the underscores, just makes it really easy for us to see
const priceCents = 345_99;
const PI = 3.14_15; // this is valid
// const PI = 3_.1415; // wouldn't be valid - has to be between numbers

console.log(Number('23_000')); // this would not work, returns NaN, so only use numbers within the code, not in an API or DB

// BigInt - special type of integer with more than 53 bits (super large number)
console.log(2 ** 53 - 1); // this is Number.MAX_SAFE_INTEGER
console.log((2 ** 53 - 1)+1); // returns the same number as above, so becomes unreliable

console.log(3920584930859486490354290439024n); // adding the n on the end transforms it into a bigint

// BigInt Operations
console.log(10004853490583443n + 1000493865093834854949n);
// but can't mix bigints with normal ints
console.log(100n + 200n); // returns 300n
console.log(94358973986735895439n + 100); // fails
console.log(382957492543895439 + BigInt(2)); // works
console.log(20n > 15); // returns true
console.log(20n === 20); // returns false
console.log(20n == 20 == '20'); // returns true

// can't use Math operations on BigInt
// decimal divisions return closes big int
console.log(10n / 3n); // returns 3n, cuts off decimal part because it is an integer





