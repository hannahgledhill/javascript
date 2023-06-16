/***
 * logical operators can use or return any data type
 * they use short-circuit evaluation
 * if the first value is a truthy value, that value will be immediately returned and JS will not need to evaluate further conditions
 * 
 */

console.log(3 || 'Jonas'); // returns 3 since it is truthy
console.log('' || 'Jonas'); // returns Jonas since the empty string is falsy
console.log(true || 0); // returns boolean true
console.log(undefined || null); // returns null since undefined is falsy, null is still falsy but it is the only thing left to return and something must be returned

console.log(undefined || 0 || '' || 'hello' || 23 || null); // returns hello because it is the first truthy value, short circuits the others

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // if restaurant.numGuests has a vlaue, return that value, otherwise return 10
const guests2 = restaurant.numGuests || 10; // this is equivalent to the above and short circuiting is applied
// BUT if restaurant.numGuests were actually 0, would still return 10... though when would you set the number of guests to 0?


/** and operator */


console.log(0 & 'Jonas'); // returns 0, short-circuits at the first FALSY value.... very confusing??
console.log(7 & 'Jonas'); // returns 'Jonas' looks for the first falsy value but can't find one so returns the last value

// does sort of make sense, if any part is false the whole thing will be false so it short-circuits at the first falsy value

console.log('hello' && 23 && null && 'Jonas'); // returns null

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

// can use & operator to avoid having to use if statement

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// this is equivalent

