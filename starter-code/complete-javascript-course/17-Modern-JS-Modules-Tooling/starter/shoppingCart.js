// exporting module
console.log('exporting module');

const shippingCost = 10; // variables are scoped only to this module, so they are private
const cart = [];
const totalPrice = 237;
const totalQuantity = 23;

export const addToCart = function(product, quantity) { // can have multiple named exports but they all have to happen in top level code ie. can't be inside an if statement
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};

export { totalPrice, totalQuantity };

// default exports are used if you only ever want to export 1 thing from a module, when we import it we give it any name we want (no curly braces), it will assign the default export to whatever name we give it in the imported module

