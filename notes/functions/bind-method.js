// allows us to set which object the function will refer to with this BUT doesn't call the original function, instead it creates a copy of the function where the this keyword is bound

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

const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: [],
};

const book = lufthansa.book;
const bookEW = book.bind(eurowings);
const bookSW = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookSW(234, 'Hannah Farnes');

// means we dont have to set the object every time we want to call the function

// can actually use bind to define multiple keywords not just this and these will always be set in stone every time that function is used

const bookEW23 = book.bind(eurowings, 23); // this will always book someone onto flight 23

// this is called partial application - a part of the arguments of the original function are already applied

bookEW23('Charles Farnes');
bookEW23('Joshua Farnes');

// using objects with event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    this.planes++;
    console.log(this.planes);
}

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// returns NaN, this is because the this now refers to the button and not the lufthansa object

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // adding the bind makes sure that the this is pointing to the lufthansa object

// could get out of doing the whole const book = lufthansa.book thing by just writing: 

lufthansa.book.bind(eurowings)(3958, 'Hannah Farnes');

// partial applications

const addTax = (rate, value) => value + value * rate;
console.log(0.1, 200); // returns 220

const addVAT = addTax.bind(null, 0.23); // don't need a this keyword but this presets the rate to 23%
console.log(addVAT(200));

// rewrite using a closure...

const addVatClosure = function(rate) {
    return function addTaxClosure(value) {
        return value + value * rate;
    }
}
const addVAT2 = addVatClosure(0.23);
console.log(addVAT2(200));

// rewrite as arrow...

const addVatArrow = (rate) => (value) => value + value * rate;
const addVAT3 = addVatArrow(23);
console.log(addVAT3(20));
