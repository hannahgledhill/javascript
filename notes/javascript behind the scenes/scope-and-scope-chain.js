/**
 * 
 * scoping is how our program's variables are organised and accessed
 * it determines where we can access certain variables and where we can't
 * 
 * JS uses lexical scoping which means that scoping is controlled by the placement of functions and blocks in the code
 * eg. a function written inside another function has access to the variables inside the parent function
 * 
 * scope itself is the environment in which a certain variable is declared:
 * - global scope
 * - function scope
 * - block scope
 * 
 * the scope of a variable is the region of code where an entire region can be accessed
 * 
 * 
 * GLOBAL SCOPE
 * 
 * outside of any function or block, variables declared in global scope are accessible everywhere
 * 
 * FUNCTION SCOPE
 * 
 * variables are accessible only inside of the function -- also called local as opposed to global scope
 * 
 * BLOCK SCOPE
 * 
 * since ES6 you have block scope - so variables DECLARED within an if statement or a for loop are only accessible within that block
 * BUT this only applies to variables defined with let or const
 * if you declare with var that variable will still be accessible outside of the block and will be scoped either to the function or to the global
 * 
 * in strict mode functions are block scoped
 * 
 * SCOPE CHAIN
 * 
 * this is like a nested chain of scopes of variables within functions within functions etc.
 * if a variable can't be found in a particular scope the scope chain will look up through the chain until it finds it in a parent scope or in the global scope
 * if nothing can be found after the global scope, will generate an error
 * variables are never copied from one scope to another, you simply lookup the chain to find it
 * cannot look DOWN the chain - functions can't access child function variables
 * 
 * VAR is function scoped not block scoped - so if it is in a block within a function, it will still be accessible from every other block even if it was not declared at the top of the function
 * this is important to bear in mind to prevent overwriting errors
 * 
 * because of the scope chain, JS looks in the current scope first BEFORE looking at the parent scope and then global scope. So if you REDECLARE a const in a block for example, JS will use your re-def, but you haven't
 * acutally overwritten the global version of the variable. They are completely different variables
 * this is why you can have multiple functions with the same parameters
 * 
 * 
 * 
 */