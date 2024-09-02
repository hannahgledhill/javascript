// foreach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) { // notice have to put index first and use array.entries()
    if (movement > 0) {
        console.log(`${i+1}: you deposited ${movement}`);
    }
    else {
        console.log(`${i+1}: you withdrew ${Math.abs(movement)}`);
    }
}

console.log('---foreach---');

movements.forEach(function(mov, i, arr){ // have to have the params in this order
    if (mov > 0) {
        console.log(`${i+1}: you deposited ${mov}`);
    }
    else {
        console.log(`${i+1}: you withdrew ${Math.abs(mov)}`);
    }
});

// remember you cannot use continue and break in foreach, it will always loop over the entire array. if you need to break out of a loop you will need to use for of

// maps - array of key value pairs

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(val, key, map){
    console.log(`${key}: ${val}`);
});

// set - array of unique values

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']); // would contain only USD, GBP and EUR
currenciesUnique.forEach(function(val, key, set){
    console.log(`${key}: ${val}`); // note the key is the same as the value, this is because sets DON'T HAVE KEYS OR INDEXES
});

