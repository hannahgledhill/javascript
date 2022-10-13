/**
 * object keys are also known as properties
 * creating an object with curly braces, keys etc. is called 'object literal syntax'
 * 
 * values in objects are not ordered, so can declare and retrieve in any order
 * 
 * when retrieving, can put variables and even expressions inside square brackets, not dot notation
 * eg. console.log(myObject['first' + $nameKey]);
 * 
 * you get undefined if you try to access a property of an object that does not exist -- remember undefined is falsy!!
 * 
 * can use both dot and bracket to add new properties to the object
 * 
 * objects can contain functions as values (arrays can't) -- these are known as methods
 * has to be function EXPRESSIONS as must return a value
 * 
 * const myObject = {
 *  calcAge: function(birthYear) {
 *      return 2023 - birthYear;
 *  }
 * }
 * 
 * call with myObject.calcAge(1991);
 * or (less usual) myObject['calcAge'](1991) -- note have to have the function name in quotes and then the param as a parenthesis (due to operator precedence -- bit weird)
 * 
 * functions can access other properties within the same object using this keyword
 * 
 * const myObject = {
 *  birthYear: 1991,
 *  calcAge: function() { return 2023 - this.birthYear }
 * }
 * 
 * call with myObject.calcAge(); -- still need the empty parenthesis because you can see that is in the function declaration
 * 
 * can use this to store new properties in the object so you can use them again without having to compute the function each time
 * 
 * const myObject = {
 *  birthYear: 1991,
 *  calcAge: function() { 
 *      this.age = 2023 - this.birthYear;
 *      return this.age;
 *  }
 * }
 * 
 * can now call with myObject.age;
 * 
 * objects also have inbuilt methods from javascript
 * 
 */