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

*/