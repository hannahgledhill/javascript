// importing module
import { 
    addToCart, 
    totalPrice as Price, 
    totalQuantity as Quantity
} from "./shoppingCart.js";

// or can do import * as ShoppingCart from './shoppingCart.js', then use ShoppingCart.addToCart('tomatoes', 5);
// the module is effectively exporting a public api just like a class with methods and properties

console.log('importing module');
addToCart('tomatoes', 5);
console.log(Price, Quantity);





