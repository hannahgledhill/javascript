const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // if restaurant.numGuests has a vlaue, return that value, otherwise return 10
const guests2 = restaurant.numGuests || 10; // this is equivalent to the above and short circuiting is applied
// BUT if restaurant.numGuests were actually 0, would still return 10... though when would you set the number of guests to 0?

const guestsCorrect = restaurant.numGuests ?? 10; // would return 0 if numGuests were 0

/**
 * works with null values, not falsy values
 * null values are ONLY null and undefined
 * 0 or '' would not short-circuit so would return 10
 * 
 * 
 */