/***
 * does the opposite of the spread operator
 * collects multiple elements and condenses them into an array
 * 
 * spread goes on the RHS of the = eg. arr = [1, 2, ...origArr];
 * 
 * can use on the LHS to destructure an array
 * 
 */

const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];

/*** basically you are destructuring and declaring all at once that a = 1, b = 2 and others = [3, 4, 5, 6, 7, 8]
 * can also do with objects eg. const {sat, ...weekdays} = blah blah
 * 
 * for functions can collate arguments, really useful when you don't know how many arguments there will be
 */

const add = function(...numbers) {
    let sum = 0;
    numbers.forEach((number)=>{
        sum += number;
    });
    console.log(sum);
}
add(2, 3);
add(4, 5, 6, 7);