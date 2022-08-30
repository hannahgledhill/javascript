const age = 23;

age >= 23 ? console.log('you can drink wine') : console.log('stick to soft drinks');

// ? is the if, : is the else
// can only have 1 line and have to have the else (:) operator
// ternary operator is an EXPRESSION and always produces a value, can use it to assign a variable or inside a template literal

const oldEnough = age >= 23 ? true : false;

console.log(`You ${age >= 23 ? 'are' : 'are not'} old enough`);