/**
 * encapsulation means keeping some properties and methodds private within the class
 * they will only be accessible outside the class through an API
 * 
 * prevents code from outside a class accidentally messing with code inside the class
 * also means you can change internal methods without worrying about affecting anything else that might be calling the external methods or properties
 * 
 * a protected property is  one that is still accessible but others know it is not supposed to be changed
 * 
 * declare as this._movements = [];
 * 
 * convention is to use a getter method to interact with them, even though they can technically be called directly
 * 
 * getMovements() {
 *  return this._movements;
 * }
 * 
 * could still do console.log(Account._movements); but it's not really convention
 * 
 * same applies with methods like
 * 
 * _approveLoan() {
 *  .....
 * }
 * 
 */
