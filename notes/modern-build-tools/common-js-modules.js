/**
 * have been used in nodejs historically 
 * nodejs runs js on a server without needing a browser
 * many npm packages still use the commonjs system because npm was originally intended only for node
 */

export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}

// this won't work in the browser but would work in nodejs

const { addToCart } = require('./module.js'); // equivalent to import

// module bundlers can bundle common js modules