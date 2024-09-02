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

we can't access the internal variables from outside the closure
can look at the booker function using console.dir(booker);

don't actually need to return a function from another function in order to create a closure

*/

// more examples of closures

let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
};

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
};

g(); // g() is the result of the function which is to assign a function to f
f(); // returns 46 because f has access to a, but we don't

h(); // reassigns f
f(); // returns 1554 (777*2)

console.dir(f); // can see the closure contains b but no longer a

// second example - timer

const boardPassengers = function(n, wait) {
    const perGroup = n/3;
    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000); // this will execute after 3 seconds
    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// the setTimeout still has access to n, wait and perGroup even though the boardPassengers function has finished executing before the setTimeout callback ever runs - this is because of the closure
// if the global scope had priority over the closure we would expect perGroup to be 1000 but when the timeout runs it is still returning n / 3

// coding challenge

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click',function(e){
        header.style.color = 'blue';
    });
})();

