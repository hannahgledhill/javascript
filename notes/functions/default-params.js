const bookings = [];

// can use logic to specify default values but can only use previously declared values
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123'); // will have default values for numPassengers and price
// can't skip parameters, have to say null, null etc.or undefined which would give the default parameter






