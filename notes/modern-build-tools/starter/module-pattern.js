// used in older JS to implement module pattern, to encapsulate functionality, to have private data and to have a public api
// implemented using an IFE and closures

const ShoppingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function(product, quantity) { 
        console.log(`${quantity} ${product} added to cart`);
    };

    const orderStock = function(product, quantity) { 
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        orderStock,
        cart,
        totalPrice,
        totalQuantity
    }
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.orderStock('pizza', 2);
console.log(ShoppingCart2.shippingCost); // returns undefined because it was not part of the public API

// bear in mind for nodejs have to write exports and imports a different way (using Common JS syntax)

// export (nodeJS)
export.addToCart = function(product, quantity) { 
    console.log(`${quantity} ${product} added to cart`);
};

// import (nodeJS)
const { addToCart } = require('./shoppingCart.js');

// though in the long run ES6 modules may completely replace this way of doing things in node

