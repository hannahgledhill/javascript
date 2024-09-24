// importing module
import { 
    addToCart, 
    cart,
    totalPrice as Price, 
    totalQuantity as Quantity
} from "./shoppingCart.js";
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es'; // parcel can actually find the lodash package without us fully specifying the path

// or can do import * as ShoppingCart from './shoppingCart.js', then use ShoppingCart.addToCart('tomatoes', 5);
// the module is effectively exporting a public api just like a class with methods and properties

console.log('importing module');
addToCart('tomatoes', 5);
console.log(Price, Quantity);
console.log(cart); 


const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5},
    ],
    user: {loggedIn: true},
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state); 

state.user.loggedIn = false;

console.log(stateClone); // loggedIn has changed even on the clone
console.log(stateDeepClone); // loggedIn has remained as it was

// use npm init to create the package.json
// parcel: npm install parcel --save-dev
// run using "npx parcel index.html" - we pass in the entry point where the script.js is included
// also creates a development server like live-server
// get dist folder with built index.html and the JS files
// if get weird errors like "Expected content key 2d39cdf7c618ab5b to exist" delete the .parcel-cache folder and rebuild
// when we save the file it will reload as with live-server but we can activate something even better called hot module replacement

if (module.hot) {
    module.hot.accept()
}

// this means whenever we change one of the modules it will automatically update in the browser without triggering a full page reload :) really great for maintaining state on page!


// can also run parcel using npm scripts in the package.json, then we just do npm run start to start the start script
// to run final build can make a build script in package.json, the final build is compressed and has dead-code elimination etc.
// we just need to upload the JS file linked to in the minified index.html


// we use Babel to polyfill back into ES5 for people stuck on old internet explorer
// parcel automatically uses babel to transpile the code. we can configure it manually but that is a lot of work
// BUT transpiling isn't enough for features that don't have an ES5 equivalent
// for this we need polyfilling
// use npm install core-js and import 'core-js/stable'
// polyfilling re-creates the ES6 functions and then makes them available for the code to use
// can do specific functions like import 'core-js/stable/array/find' to only pollyfill what you will use, will greatly reduce the bundle size

// BUT also need npm install regenerator-runtime and import 'regenerator-runtime/runtime' for polyfilling async functions


