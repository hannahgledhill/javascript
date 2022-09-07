/**
 * can include packages, 3rd party modules etc.
 * use npm to get and install packages
 * node either runs the js or can be used to bundle/compile it
 * 
 * 1. bundling joins all modules into one file and compresses the code
 * 2. then transpile/polyfill which converts all modern js back to ES5 so it works on older browsers -- this is done using Babel
 * 3. deploy final javascript bundle
 * 
 * webpack or parcel do steps 1 and 2 for us
 * 
 * 
 * a module is a reusable piece of code that encapsulates implementation details
 * it can import other modules and can export values and functions (known as the public api)
 * that public api is consumed by importing modules into a module (known as dependencies)
 * 
 * top level variables are scoped to the module and so won't clash with other modules
 * modules are always executed in strict mode, whereas script strict mode has to be defined
 * the top-level this is undefined, in script it is always the window
 * can export and import values between modules
 * imports are always hoisted - become globally available throughout the module
 * have to use <script type="module"> for html linking -- if you see the "cannot use import statement outside a module" error this is what you are missing!!!
 * file download of modules (through importing or linking) always happens asynchronously
 * 
 * remember, variables are private inside of a module unless you specifically export them
 * 
 */


/** exporting module (named exports) */

export const addToCart = function (product, quantity) {
    console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 227;
const totalQuantity = 2948;

export { totalPrice, totalQuantity as qt } // can export multiple named things, can use as in exports as well

/** importing module */

import { addToCart, totalPrice as price, qt } from './module.js'; // remember the curly braces! can use 'as' to rename like in SQL

addToCart('bread', 5);
console.log(price);

/** 
 * exports have to happen inside "top level code", ie. you can't have conditional exports like if () { export.... }
 */


import * as ShoppingCart from './module.js'; // can import all exports of a module and assign all the methods and props to an object, like a class

ShoppingCart.addToCart('bread', 5);

/** if you only do one export can do an export default, doesn't even have to be named, and then can give it any name when importing */

export default function (name) {
    console.log(name);
}

import printName from './module.js';

/** modules can affect other modules, so if module 1 adds items to a blank array in module 2, if that array is then access in module 2 it will contain all the items 
 * so it's not an "instance" like in a class, it is a live connection, it points to the same place in memory
*/