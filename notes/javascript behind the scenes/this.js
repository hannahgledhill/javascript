/**
 * 
 * special variable created for every execution context (every function)
 * points to the "owner" of the function
 * depends on HOW the function is called and is only assigned when the function is actually called
 * 
 * Function is the method of an object --> this will point to the object calling the method
 * Function is a standalone function not a method attached to any object --> this is undefined -- only valid in STRICT mode, otherwise this will point to the global window object
 * Arrow functions --> do not get their own this keyword, the this will be whatever it was of the surrounding function (referred to as lexical this)
 * Function called as event listener --> this will be the DOM element that the handler is attached to
 * 
 * so basically this is always an object, not really that useful in non-OOP programmin, except with the DOM listeners
 * 
 * remember, this points to the object CALLING the method, not the object that defines it
 * so if you make a new Object(), or copy methods from one object to another, it will be on the instance that is calling the method
 * 
 * NOTE if an object is defined as a function rather than a class, can "extract" its method
 * 
 * eg.
 * 
 * const jonas = {
 *  year: 1991,
 *  calcAge: function() {
 *      console.log(2023 - this.year);
 *  }
 * }
 * 
 * const functionCopy = jonas.calcAge;
 * console.log(functionCopy(19));
 * 
 * but functionCopy would loose its this, since it is now a regular function call, divorced from any object
 * 
 * IMPORTANT - arrow functions in an object will not have the this of the object, their this would be the window object from the global scope
 * 
 * so const jonas = {
 *  firstName: 'Jonas',
 *  greet: () => { console.log(`Hello ${this.firstName}`); }
 * }
 * this would be undefined
 * 
 * BUT if have function inside of another function within an object, the interior function must be an arrow function to access the "grandparent" object
 * or, within the first function assign this to a variable called _this or self or something
 * 
 * 
 * Functions also get access to an arguments keyword, like this only available in regular functions, not arrow functions
 * arguments is an array containing the arguments passed to the function
 * useful when function is passed more arguments than might be specified as parameters or when you don't know how many arguments there will be
 * can simply loop through the arguments array
 * will not work in arrow functions
 * 
 */