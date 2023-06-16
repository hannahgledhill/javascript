const rest1 = {
    name: 'Capri',
    numGuests: 20
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};

// want to add a number of guests property to objects that don't have one

rest2.numGuests = rest2.numGuests || 10; // if it doesn't exist, set it to the default of 10
rest1.numGuests = rest1.numGuests || 10; // would return 20

// with logical assignment operator can write the same thing in a more concise way

rest1.numGuests ||= 10; // returns 10
rest2.numGuests ||= 10; // returns 20

// BUT if they were 0, would still default to 10

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// this would work with 0, would only return 10 if numGuests was null or undefined (ie. missing from the object)

// let's say we want to replace the names of the restaurant owners with nothing to make them anonymouse

rest2.owner &&= 'anonymous'; // would return anonymous because there is no falsy value so returns the last value
// BUT
rest1.owner &&= 'anonymous'; // would not be assigned in the first place!
