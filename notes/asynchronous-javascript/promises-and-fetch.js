/***
 * help us to escape callback hell!!
 * a promise is an object that is used as a placeholder for the future result of an asynchronous operation
 * a container for a future value
 * 
 * no longer need to rely on events and callback functions
 * can also chain promises for a sequence of asynchronous operations rather than nesting them
 * 
 * PROMISE LIFECYCLE
 * 
 * 1. pending - before any value resulting from the asyncrhonous task is avilable, the task is running in the background
 * 2a. settled: fulfilled - the data was fetched successfully
 * 2b. settled: rejected - there has been an error during the task
 * 
 * a promise is only settled once, the state cannot change afterwards
 * we "consume" a promise when we handle its settled state
 * the fetch function "builds" the promise for us, we can also do this manually in JS
 * 
 * 
 */

const lottery = new Promise(function(resolve, reject){ // this function will execute as soon as the promise is built, it contains the asyc operation(s) we want to compute and will return a result
    console.log('lottery draw is happening....');
    setTimeout(function(){
        if (Math.random() >= 0.5) {
            resolve('You WIN!!!'); // this function will happen when the promise is successful (fulfilled/resolved), this is what will be consumed by the then method
        }
        else {
            reject(new Error('You lose :((')); // this will trigger the catch handler in the fetch
        }
    }, 2000);
});

lotterPromise.then(res => console.log(res)).catch(err => console.error(err));
// will either console.log(You WIN!!!) or console.error(You lose :(())) depending on the random number

// we generally only build promises when we are "promisifying" = converting old callback based functions into the promise format

// let's promisify setTimeout into wait

const wait = function(seconds) {
    return new Promise(function(resolve){ // don't need reject because it's impossible for a timer to fail
        setTimeout(resolve, seconds * 1000); // having a null resolve still works it just doesn't return anything
    });
}

wait(1)
    .then(() => {
        console.log('1 seconds passed');
        return wait(1);
    })
    .then(() => {
        console.log('2 seconds passed');
        return wait(1);
    })
    .then(() => {
        console.log('3 seconds passed');
        return wait(1);
    })
    .then(() => console.log('3 seconds passed'));

// can resolve a promise immediately using the static method on the Promise object

Promise.resolve('I am immediately resolved').then(x => console.log(x));
Promise.reject('I am immediately rejected').then(x => console.log(x));