/**
 * special form of function expression that is shorter and faster to write
 * 
 * eg. const calcAge3 = birthYear => 2023 - birthYear;
 * 
 * don't need brackets or curly braces and has implicit return. can only use this with one paramter and one line return
 * 
 * call with const age3 = calcAge3(1992);
 * 
 * more complex:
 * 
 * const yearsUntilRetirement = (birthYear, firstName) => {
 *  const age = 2022 - birthYear;
 *  const retirement = 65 - age;
 *  return `${firstName} retires in ${retirement} years`;
 * }
 * 
 * const untilIRetire = yearsUntilRetirement(1991, 'Hannah');
 * 
 * multiple parameters require brackets and multiple lines of code requires curly braces
 * 
 * NOTE arrow functions do not get a this keyword, they remain within the this scope of the parent
 * 
 * 
 * 
 * 
 */