// creating dates
const nowDate = new Date(); // returns current date and time with timestamp
const fromString = new Date('Aud 02 2020 18:05:41');
const fromString2 = new Date('December 24, 2015');
const fromUTC = new Date('2019-11-01T13:15:33.035Z');
const fromParams = new Date(2037, 10, 19, 15, 23, 5); // year, month, day, hour, min, second but remember month is -1 because starts at 0....
const fromParamsWithLogic = new Date(2037, 10, 31); // there aren't 31 days in november so will return december 1st
const fromMilliseconds = new Date(0); // 1st jan 1970 (this is a timestamp - number of milliseconds since 1st jan 1970)

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
future.getFullYear(); // returns 2037
future.getMonth(); // returns 10 (which is november as it is zero based)
future.getDate(); // returns 19
future.getDay(); // returns 4 (thursday, starts with sunday at 0)
future.getHours(); // returns 15
future.getMinutes(); // returns 23
future.getSeconds(); // returns 0 (none were specified)

console.log(future.toISOString()); // returns 2037-11-19T15:23:00.000Z, useful for storing like in DBs

future.getTime(); // gets timestamp, very useful for storing and re-creating into a date
new Date(future.getTime());

const currentTimestamp = Date.now(); // returns current timestamp

future.setFullYear(2040); // changes the year of the date
console.log(future); 

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth()}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

const dayPadded = `${now.getDate()}`.padStart(2, 0); // makes sure you would have 01, 02 etc.

// calculations with dates - using timestamps

const calcDaysPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24); // the calculation will return milliseconds so convert back to days
console.log(calcDaysPassed(currentTimestamp, future)); 
// can use math.abs and math.round to make sure always get a positive and whole number

// internationalisation
// js has a new api that lets us easily format numbers and strings according to different languages - very useful for currencies and dates

console.log(new Intl.DateTimeFormat('en-US').format(now));
console.log(new Intl.DateTimeFormat('en-GB').format(now));
console.log(new Intl.DateTimeFormat('ar-SY').format(now));

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
}
const locale = navigator.language; // get locale from browser
console.log(new Intl.DateTimeFormat(locale, options).format(now));

// see lingoes.net/en/translator/langcode.htm