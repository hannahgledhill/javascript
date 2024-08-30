// callback functions
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// higher order function - calls the callbacks
const transformer = function(str, fn) {
    console.log(`transformed string: ${fn(str)}`);
    console.log(`transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// foreach is also a higher order function that uses a callback function
// advantage of callbacks if we can split our code up into smaller and repeatable parts
// also allows us to create abstraction....
// this hides the detail of code implementation so we can think about problems at a higher, more abstract level

