/**
 * hoisting makes some types of variables accessible/usable in the code before they are actually declared - in essence, they are "lifted" to the top of their scope
 * this happens because, behind the scenes, the code is scanned for variable declarations BEFORE it is executed
 * a code's variables are housed within a Variable Environment Object with properties for each variable found within the code
 * 
 * need to use strict mode for all this to work
 * 
 * Function declarations are hoisted - so can call a function that is only declared later in the code
 * 
 * Var variables are hoisted, but if you call them before they are declared they will appear as undefined. They do exist, but the VEObjdoesn't know what they are yet
 * 
 * Let and const variables are NOT hoisted, they cannot be called before they are declared, will result in an error. They get placed in a "temporal dead zone"
 * 
 * For function expressions they respond as a variable would respond, depending on whether they were declared with var, let or const
 * so remember that for function expressions you can't effectively call them before they have been defined
 * but proper functions (function declarations) you can call them and declare them at the bottom of the page (though it's not really best practise)
 * sometimes it is necessary to call functions before they are declared for certain advanced techniques such as mutual recursion
 *   
 * Var avtually creates a variable in the window object, which can cause some security issues if people guess your variable name outside of your function
 * 
 * 
 * 
 */