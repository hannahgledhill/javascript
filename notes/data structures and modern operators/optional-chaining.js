/**
 * say you were querying console.log(restaurant.openingHours.monday.open) but you don't know if monday is defined, if it came from an api or whatever
 * if openinghours.monday is undefined, .monday.open would throw an error
 * what if not even openinghours exists? could do with if statements but it would get very messy
 * 
 * with optional chaining if a certain property does not exist then undefined will be returned immediately and the expression will stop, avoiding the error
 * 
 * 
 * 
 */

console.log(restaurant.openingHours?.monday?.open);
// if there isn o openingHours will return undefined
// BUT 0 and empty string will still be returned, only null or undefined will break the chain

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];
for (const day of weekdays) {
    const open = restaurant.openingHours?.[day]?.open || 'closed'; // if it is falsy, say it is closed
    console.log(`On ${day} we open at ${open}`);
}
// will log the opening hours for each day the restaurant object has defined
// remember if you want to allow through 0 or empty string would do [day]?.open ?? 'closed' -- would catch only null or undefined

// can use optional chaining for calling methods

console.log(restaurant.order?.(0,1) ?? 'Method does not exist'); // note the dot BEFORE the params...

// can use optional chaining to see if an array is empty

const users = [
    {name: 'Jonas', email: 'email@email'}
];

console.log(users[0]?.name ?? 'User array empty');
