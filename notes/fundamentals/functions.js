/**
 * functions can be called, executed, invoked or run (all same thing)
 * if a function returns a value, we need to assign it to a variable to be able to use it
 * 
 * parameter is the placeholder in the function
 * the argument is the value you pass to the parameter when you invoke the function
 * 
 * eg. const appleJuice = fruitProcessor(5, 0);
 * 
 * a function DECLARATION uses the function keyword to declare a function eg. function fruitProcessor(apples, oranges) {...}
 * 
 * FUNCTION EXPRESSION or ANONYMOUS FUNCTION is assigned to a variable and not named after the function declaration
 * 
 * eg. const calcAge2 = function(birthYear) {
 *  return 2037 - birthYear;
 * }
 * 
 * still called in the same way
 * 
 * eg. const age2 = calcAge2(1991);
 * 
 * NOTE a function expression HAS TO PRODUCE A VALUE. It can't be entirely procedural. Useful because you can use it in function factories to call from another function (???)
 * 
 * function declarations can be called BEFORE they are defined in the code, but function expressions cannot
 * 
 * can have conditional returns
 * 
 * if (something) {
 *  return something;
 * }
 * else {
 *  return something else;
 * }
 * 
 * note return immediately exits the function
 * 
 * NOTE in VSCode you can do Alt + up arrow to move line up by 1
 * and can do Ctrl Shift L to select all occurences of something and retype them all at the same time
 * 
 * 
 * 
 * 
 */