// empty array + fill method

const x = new Array(7); // this creates a new array with 7 empty elements
// we can call the fill method on this array
x.fill(1); // will mutate underlying array and fill all 7 slots with the value 1
x.fill(1, 3, 5); // will fill up elements 3 and 5 with the value 1

const arr = [1,2,3,4,5,6,7];
arr.fill(23, 4, 6); // replaces the 5th and 6th values with 23

// Array.from()

const y = Array.from({
    length: 7,
    function() { // some mapping function to describe how to populate the array
        return 1;
    }
});

const z = Array.from({
    length: 7,
    function(cur, i) { // can write (_, i) if you are not using the first parameter, or any other required paramter
        return i + 1; // this will return values from 1 to 7
    }
});

// can also create arrays from maps, sets, or querySelectorAll which returns a node list - not quite an array and doesn't have all the array methods, so if we want to use them we first need to convert the nodelist into an array

const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    function(el) {
        return Number(el.textContent.replace('€',''));
    },
);

// can apply our mapping function all in one

// can also create an array using the spread operator, but then don't have the ability to have a mapping function or chain other methods

const movementsUI2 = [...document.querySelectorAll('.movements__value')];

