const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`passenger count: ${passengerCount}`);
    }
};

const booker = secureBooking();

/*** the global scope contains the secureBooking object, but the passengerCount variable is private
 * when booker is called a new execution context is put ontop of the execution stack
 * the EC contains all the local variables, inc passengerCount
 * the global context also contains the booker variable which holds the RETURN of secureBooking (ie. the function)
 * when the function has finished running the secureBooking() execution context is discarded from the call stack
 * 
 */

booker();
booker();
booker();

/*** after 3 the passenger count is 3 - how!?!?? shouldn't it always start at 0??
what makes this possible is a closure
the closure makes a function "remember" all the variables that existed at the function's "birthplace" at the time it was created
this is not possible with the scope chain alone

when booker is run a new EC is crated and put ontop of the call stack
any function always has access to the variables in the execution context in which the function was created
booker was born in the EC of secureBooking, so it gets access to the environment of secureBooking
this connection is called a closure
this is basically how classes work in JS

closures take priority over the scope chain, even if there is a passengerCount global variable, the one in the function will be used first

more definitions of closure:

- a closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone
- a closure gives a function access to all the variables of its parent function even after that parent function has returned, the function keeps a referene to its outer sope, which preserves the scope chain throughout time
- a closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place

*/