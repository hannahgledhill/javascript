const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmed',
    passport: 34254986593
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 34254986593) {
        alert('checked in')
    }
    else {
        alert('wrong passport!')
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// doing this we see that jonas.name has been changed by the function but flight has not
// this is because the flightNum used by the function is a copy of the original string (because it is a primitive), but the object is a referene to that object in memory

// another example
const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000);
}

newPassport(jonas);
checkIn(flight, jonas);

// newPassport has changed the passport number of Jonas so we can no longer check him in

