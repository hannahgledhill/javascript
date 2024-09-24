/***
 * write code so that you can understand it in 1 year, with good comments
 * use descriptive variable names - what they contain
 * use descriptive function names - what they do
 * 
 * refactor code to not repeat
 * don't pollute global namespace, encapsulate into functions, classes or modules
 * don't use var, use const or let if you need to change a variable
 * use strong type checks (=== and !==)
 * 
 * FUNCTIONS
 * generally functions should only do 1 thing
 * don't use more than 3 function parameters
 * use default parameters wherever possible
 * generally return same data type as received
 * use arrow functions when they make code more readable
 * 
 * OOP
 * use ES6 classes
 * encapsulate data and don't mutate it from outside the class, use a public api with methods to mutate data
 * implement method chaining ie. return the object at the end
 * DON'T USE arrow functions as METHODS because you won't have access to the this keyword
 * 
 * AVOID NESTED CODE
 * use early return (guard clauses)
 * use ternary (conditional) or logical operators instead of if
 * use multiple if instead of if/else-if
 * avoid for loops, use array methods instead like map, filter, reduce
 * avoid callback-based asynchronous APIs
 * 
 * ASYNCHRONOUS CODE
 * consume promises with async await
 * whenever possible run promises in parallel (Promises.all)
 * handle errors and promise rejections 
 * 
 * DECLARATIVE AND FUNCTIONAL JAVASCRIPT PRACTICES
 * there are 2 fundameentally different ways of writing code (paradigms)
 * 
 * IMPERATIVE code, programmer explains how to do every single step to follow to achieve a result
 * eg. step by step recipe to bake a cake
 * 
 * DECLARATIVE - programmer explains only what to do, the how is abstracted away
 * eg. describe the cake to the person and the person comes up with the recipe on their own
 */

// imperative

const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++) {
    doubled[i] = arr[i] + 2;
}

// declaractive

const arrDec = [2, 3, 6, 8];
const arrDecDoubled = arrDec.map(n => n * 2); // the steps of creating a new array and initiating a counter is abstracted away through the array method

/***
 * FUNCTIONAL PROGRAMMING - combining multiple pure functions, declarative code, avoiding side effects and mutating ddata
 * a side effect is a modification (mutation) of any data outside of the function eg. mutating external variables logging to console, writing to DOM
 * a pure function is a function without side efffects - doesn't depend on or manipulate external variables, given the same inputs always returns the same outputs
 * immutability - state (data) is NEVER modified - instead state is copied and the copy is mutated and returned, much easier to track how data flows through the application
 * react and redux are built on these concepts
 * 
 * FUNCTIONAL PROGRAMMING TECHNIQUES
 * avoid data mutations as much as possible
 * use built-in methods that don't produce side effects
 * do data transformations with methods such as .map(), .filter() and .reduce()
 * try to avoid side effects as much as possible
 * 
 * DECLARATIVE SYNTAX
 * user array and object destructuring wherever possible
 * use spread operator, turnary operator and template literals wherever possible
*/



