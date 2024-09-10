const owners = ['Jonas','Zack','Adam','Martha'];
console.log(owners.sort()); // mutates orig array, sorts alphabetically

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements.sort()); // BUT it doesn't really work with numbers....

// return < 0 keep A before B (keep order)
// return > 0 put B before A (switch order)
console.log(movements.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
}));

// rewrite
console.log(movements.sort((a, b) => a > b ? 1 : -1));

// descending
console.log(movements.sort((a, b) => a > b ? -1 : 1));

// for numbers we know if a > b the difference (a - b) will be positive anyway and if a < b it will be negative

// best - ascending
console.log(movements.sort((a, b) => a - b));
// best - descending
console.log(movements.sort((a, b) => b - a));

// if have mixed array with strings and numbers this will NOT work