/***
 * an object literal is an object that is written out/defined fully in the code using the full curly braces syntax
 * as opposed to just saying like new Image() or whatever
 * there are a few new ways in es6 to write object literals
 * 
 * object a = {
 *  .....
 * };
 * 
 * object b = {
 *  ....
 * };
 * 
 * before if wanted to have a inside b had to do
 * 
 * object b = {
 *  a: a,
 *  b: b,
 *  c: c
 * }; etc.
 * 
 * now with es6 enhanced object literals can just do
 * 
 * object b = {
 *  a,
 *  b:b,
 *  c:c
 * }; etc.
 * 
 * 
 * also don't have to create properties and write them as a function expression to define methods within an object eg
 * 
 * objectC = {
 *  print: function() { console.log('hello'); }
 * }
 * 
 * now can do
 * 
 * objectD = {
 *  print() { console.log('hello'); }
 * }
 * 
 * 
 * can also compute property names instead of having to write them out manually
 * 
 * const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];
 * const openingHours = {
 *  [weekdays[0]]: {
 *   open: 12,
 *   close: 22
 *  },
 *  [weekdays[1]]: {
 *    open: 12,
 *    close: 22
 *  }
 * }
 * 
 */