const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,
            name: name
        });
    },
};

lufthansa.book(239, 'Jonas Smedth');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

// don't want to just copy and paste the book function into the other object, instead we take the function and store it as an external variable that can then be used by the other objects
// BUT we need the this to point to the correct object

const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Williams'); // this uses lufthansa's book function on the eurowings object and makes the booking to eurowings!!!!

// apply method does the same thing but receives the other arguments as an array

const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);

// apply is not really used that much in modern javascript

book.call(eurowings, ...flightData);

// more common to use bind method