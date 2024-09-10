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

// filter method (find only the positive movements) - works by returning a boolean value, if the bool value for the individual array element is true that element will be included in the new array
// more useful than for loop because you can chain methods together

const deposits = movements.filter(function(mov, i, arr){ // also have access to the index and the entire array
    return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0); // can write as arrow functions
console.log(withdrawals);

// reduce - boil down all the elements in an array to a single value

const balance = movements.reduce(function(acc, mov, i, arr){ // first param is the accumulator
    return acc + mov;
}, 0); // the 0 is the initial value of the accumulator
console.log(balance);

const balanceArrow = movements.reduce((acc, mov) => acc + mov, 0); // can write as arrow function

// get maximum value of movement array using reduce

const maximum = movements.reduce((acc, mov) => mov > acc ? mov : acc, movements[0]); // need to return something each time, so if the movement is greater than the acc return the new movement as the acc, otherwise return the existing acc
// have to use movements[0] as the first value rather than 0 in case all the movements are negative

// coding challenge 2
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const dogAverageAge = function(arr) {
    return arr
        .map(age => age <= 2 ? age * 2 : 16 + age * 4)
        .filter(humanAge => humanAge >= 18)
        .reduce((acc, adultAge, i, adultArr) => acc + (adultAge/adultArr.length), 0); // (2+3)/2 is the same as saying 2/2 + 3/2
};
console.log(dogAverageAge(testData1));
console.log(dogAverageAge(testData2));

// can only chain as long as the previous one returns an array, but can be difficult to debug unless you console.log the array at each step
// bad practice to chain methods that mutate the underlying array such as slice or reverse

// find - retrieve one element of an array based on a condition
const firstWithdrawal = movements.find(mov => mov < 0); // will only return the first element in the array that satisfies the condition
console.log(firstWithdrawal);

// find an object in an array based on a property of the object

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// find will return undefined if no element matches the condition

// findindex - returns the index of the found element rather than the element

if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1); // will remove this account from the accounts array
}

// similar to indexOf which lets you search array for values, but findIndex is more complciated and you can search within objects etc.
// also have access to i and arr

// some and every

movements.includes(-130); // this only tests for equality
movements.some(mov => mov > 0); // does the array contain any values greater than zero (ie. are there any deposits)
movements.some(mov => mov > 5000); // are there any deposits over 5000
movements.every(mov => mov > 0); // is every element in the array greater than zero, returns true or false

// can also write callback function separately

const depositCallback = mov => mov > 0;
movements.some(depositCallback);
movements.every(depositCallback);
movements.filter(depositCallback);

// allows you to reuse the same condition for multiple array methods

// flat and flatMap

const nestedArr = [[1,2,3],[4,5,6],7,8];
console.log(nestedArr.flat()); // returns [1,2,3,4,5,6,7,8]

const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
console.log(arrDeep.flat(2)); // parameter shows how many levels deep, gets the same as before

// say the bank wants to calculate the sum of all the overall movements of all the accounts
// put all movements together in an array and use flat

const calculateBankSum = accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc,mov) => acc + mov, 0); // the first map creates an array of the movements arrays with 1 level of nesting, can now use flat() and then reduce

// map and then flat is a pretty common operation, hence flatmap

const calculateBankSum2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
// flat map takes the map callback and can only do 1 level deep