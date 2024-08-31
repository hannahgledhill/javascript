// need a function that is only executed once and then disappears
// used with async await

const runOunce = function() {
    console.log('this will never run again');
};
runOunce();

// there is nothing stopping us from using this again
// iifes are written as follows

(function() {
    console.log('this will never run again');
})(); // the second () immediately calls the function

// can also do this as an arrow

(() => console.log('this will never run again'))();

// why is this useful?
// we know that functions do not have access to variables created inside functions that run in the parent function
// ie. functions don't have access to "inner scope", only inner scope has access to outer/global scope
// all data defined within a scope is known as "private" or "encapsulated"
// iifes are useful for making sure variables can't accidentally be accessed or overwritten by other libraries or scripts loaded on the same page

{
    const isPrivate = 23;
    var notPrivate = 46;
}

console.log(isPrivate); // would return an error
console.log(notPrivate); // would work - this is why const is better than var
// var ignores "blocks"

// in reality iifes are not used that much any more because we can ust create blocks like the above in orde to restrict scope







