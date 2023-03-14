/**
 * use curly braces and have to use variable names that exactly match the properties of the object
 * 
 * const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const {name, openingHours, categories} = restaurant;
// don't have to write them in order but names must match

can rename as you assign

const {
    name: restaurantName, 
    openingHours: hours, 
    categories: tags
} = restaurant;
our variables will now be called restaurantName, hours and tags

default values
const {
    name: restaurantName, 
    openingHours: hours, 
    categories: tags,
    menu = [],
    starterMenu: starters = []
} = restaurant;
if object does not have the menu or starterMenu props will have the default value, otherwise will take the object value

mutating variables (like switching)
let a = 111;
let b = 999;
const obj = {a: 23, b:7, c:14};

we want to mutate the EXISTING variables a and b to become what they were in the object
have to write as
({a, b} = obj)
this will re-assign a and b into the values 23 and 14

to get nested objects
const {
    fri: {open, close}
} = restaurant.openingHours;
open = 11 and close = 23

often use destructuring in function parameters
eg. function fancyFunc ({firstProp, secondProp, thirdProp}) {
    ...do code
}

then would call FancyFunc({
    firstProp = 2,
    secondProp = 3,
    thirdProp = 4
})

order of the properties of the object when calling dont have to match order of properties in function def, calling obj could also have extra properties and def can set defaults
gives a lot of flexibility when passing data from APIs etc.


 */