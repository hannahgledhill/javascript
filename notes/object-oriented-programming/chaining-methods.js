/***
 * to do this have to return the object at the end of each method that we want to chain
 * 
 * so acc1.deposit(500).deposit(5).withdraw(150);
 * 
 * the methods don't return anything;
 * 
 * just need to make sure in deposit() {
 *  ....code
 *  return this;
 * }
 * 
 * withdraw() {
 *  ...code
 *  return this;
 * }
 * 
 * the above code would now work with chaining
 */