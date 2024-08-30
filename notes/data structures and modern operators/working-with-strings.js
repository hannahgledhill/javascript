/*

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // returns A
console.log('B737'[0]); // returns B

console.log(airline.length); // returns string length
console.log(airline.indexOf('r')); // returns first occurence
console.log(airline.lastIndexOf('r)); // index of the last occurence
console.log(airline.indexOf('Portugal'));

can use this to extract parts of strings using slice method

console.log(airline.slice(4)); // returns 'Air Portugal', doesn't change underlying string
console.log(airline.slice(4, 7)); // returns 'Air', the end value is not included in the string, the length will be 3

console.log(0, airline.slice(airline.indexOf(' '))); // will return the first word
console.log(airline.lastIndexOf(' ')); // will return the last word

console.log(airline[-2]); // will extract last 2 letters
console.log(0, -1); // will start from the begining and cut off the last character

const checkMiddleSeat = function(seat) {
    // if the seat is in row B or E it is a middle seat
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat')
    else console.log('you got lucky!);
}

checkMiddleSeat('11B');


airline.toLowerCase(); 
airline.toUpperCase();
// can change string to upper or lower case

// fix capitalisation in passenger name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = pasengerLower[0].toUpperCase() + passengerLower.slice(1);

// comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const normalisedEmail = loginEmail.toLowerCase().trim(); // trim will also strip out the \n
console.log(email === normalisedEmail);

// replace part of string
const priceGB = '288,97£'; // want to change it to USB and change the , to a .
const priceUS = priceGB.replace('£','$').replace(',','.');

// BUT replace only replaces the first occurrence, can use replaceAll if it is available yet
// or can use regexp

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate'));

// boolean string methods
const plane = 'A320neo';
console.log(plane.includes('A320')); // returns true
console.log(plane.startsWith('Air')); // returns false

// splitting strings
console.log('a+very+nice+string'.split('+')); // creates an array
const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');

// joining strings
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' '); // joins an array into a new string

const capitaliseName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];
    for(const n of names) {
        namesUpper.push(n[0].toUppercase() + n.slice(1)); // capitalise first letter of string
    }
    return namesUpper.join(' ');
}

console.log(capitaliseName('jessica ann smith davis'));

// padding string
const message = 'go to gate 23';
console.log(message.padStart(25, '+')); // will output ++++++++go to gate 23 making 25 characters
console.log(message.padEnd(25, '.'));  // will add ....s 

// this is very useful for masking a credit card number
const maskCreditCard = function(number) {
    const str = number + ''; // adding an empty string will conver the entire bit of data to a string
    const last = str.slice(-4); // get last 4 characters
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(45438574389573945));

// repeat
const messageTwo = 'Bad weather... All departures delayed... ';
console.log(messageTwo.repeat(5));







*/