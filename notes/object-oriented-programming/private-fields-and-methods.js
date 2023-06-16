/***
 * 
 * truly private class fields and methods are very new to JS and don't really work widely in browsers
 * so there are public and private fields and public and private methods
 * 
 * public fields are defined at the top of the class
 * 
 * so class Account {
 *  locale = navigator.language;
 *  _movements = [];
 * 
 *  then go to constructor.....
 * }
 * 
 * these fields will always be created, don't need to initialise them in the constructor
 * 
 * // private fields
 * 
 * again, before the constructor....
 * 
 * class Account {
 *  locale = navigator.language;
 *  
 *  #movements = [];
 *  #pin;
 * 
 *  then go to constructor.....
 *   {
 *      this.#pin = pin;
 *   }
 * }
 * 
 * the # makes it a private field
 * so console.log(Account.#movements) would not work
 * 
 * all internal methods need to refer to this.#movements
 * 
 * for pin we don't know what it will be before the constructor
 * in the constructor we then set it when it is initialised
 * 
 * all methods declared normally in the class are public methods, they are the public API
 * 
 * #approveLoan(val) {
 *      ... do code
 * }
 * 
 * the hashtag makes functions private too, but it is not widely supported by browsers yet
 * 
 * there are also static public methods, just add static keyword in front of the function
 * static methods are not available on instances but are only used as helpers directly from the class
 * are called directly from the class eg. Account.helper() - this is used a lot in JS like Number.format() etc.
 * 
 * can also have static properties, declare at top above constructor and just say static prop = 10; or whatever
 * 
 */