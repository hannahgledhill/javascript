/** immediately called function expression
 * executes immediately on page load and is only called once
 * purpose is to create a new scope and return data once
 * this is how modules and sort of classes used to be used in practice before ES6
 */

const ShoppingCart = (function () { // this is effectively the construct function which is only used once
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to cart`);
    }

    const orderStock = function () {
        console.log(`shipping cost is ${shippingCost}`);
    }

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();

ShoppingCart.addToCart('apple', 4);
ShoppingCart.addToCart('pizza', 2);

/**
 * BUT would have to include all these "fake" modules as separate <script> tags in the html and might have variable clashes etc. can't use a bundler etc.
 */