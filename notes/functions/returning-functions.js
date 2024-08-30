// this is a closure...

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas'); // this would actually also work


// using only arrow functions....

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');