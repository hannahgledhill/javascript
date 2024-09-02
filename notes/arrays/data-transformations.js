/*** create new arrays based on data from others arrays - map, filter and reduce
map method loops over an array and applies a callback function to eacch element and puts it into a new array
filter creates a new array containing elements from the original array that pass a specific condition
reduce boils down elements of original array into one single value eg. add all numbers together, returns a single reduced value
*/

// map method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map((mov => mov * eurToUsd));
console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i, arr) => `${i+1}: you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);

