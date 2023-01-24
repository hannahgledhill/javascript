/**
 * 
 * after the code has finished compiling, a global execution context is created for the top level code, this is code not inside any function like variable declarations etc and any procedural code outside of functions
 * 
 * an execution context is an environment in which a piece of js is executed. it's like a box that stores all the necessary information for some code to be executed eg. local variables, or arguments passed into a function
 * eg. you order a pizza at a takeaway, it comes in a box with stuff that is necessary for you to eat like cutlery, receipt, sauce etc. the box is the execution code, the pizza is the js code
 * there is only ever 1 global EC, no matter how big the script is
 * 
 * oonce the GEC is created, it is executed. this is simply the CPU processing the machine code it received
 * after this has finished, functions are then executed as well
 * a new execution context will be created for each function, and same for methods which are actually just functions attached to objects
 * all the ECs together make up the call stack
 * when all the functions are done executing th engine will simply wait for callbacks associated with events - these new callback functions are provided by the event loop
 * 
 * INSIDE AN EC
 * 
 * variable environment - let const and var declarations used in the CURRENT environment, code of any CHILD functions and any function arguments of the CURRENT environment 
 * remember function parameters are the NAMES listed in the function's definition, arguments are the REAL VALUES passed to the function
 * 
 * the second thing is the scope chain which contains references to the global variables stored outside the function
 * 
 * the third thing is the THIS keyword
 * 
 * all these 3 things are generated in the "creation phase" which happens right before execution
 * 
 * EXCEPT for arrow functions which do not get their own arguments and do not have a this keyword!!!! BUT they can use the arguments object and the this keyword from their closest parent object
 * 
 * the stack then queues these ECs in order to keep track of where we are in the program's execution
 * LIFO - ECs stack from the bottom, execute the one on the top
 * 
 * this means as you are going through the code line by line, if it calls a function, that will be added to the top of the stack and executed, then the engine will return to where it was in the EC that was beneath
 * this keeps a really nice track of knowing where you are and "nesting" functions and logic
 * 
 */