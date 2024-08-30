// first class functions enable us to write higher order functions
// functions are treated as values or "first class citizens" - really just another type of objects
// this means they can be stored in variables, as object properties, or as arguments of other functions
// can even return a function from another function
// being objects, functions also have methods that can be called on them eg. bind

// a higher order function is a function that either receives another function as an argument or returns a function
// eg. addEventListener('event', function()); 
// the function that is passed in is called the callback function

// function that returns new function

function count() { // higher order function
    let counter = 0;
    return function() { // returned function
        counter++;
    }
}

