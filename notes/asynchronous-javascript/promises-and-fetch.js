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

// async await - can have 1 or more await functions

const whereAmI = async function() {
    try {
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;
        const countryRes = await fetch(`https://api.weatherapi.com/v1/current.json?key=b19e0639639f44fa85f172605241909&q=${lat},${lng}&aqi=no`); // don't need to handle error here because we did it when we built the promise
        const countryData = await countryRes.json();
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryData.location.country}`); // await will stop the code execution WITHIN the async function until the promise is fulfilled
        if (!res.ok) throw new Error('Problem getting country');
        
        const data = await res.json();
        renderCountry(data[0]);

        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    }
    catch (err) {
        console.error(err);
        renderCountry(`something went wrong ${err.message}`);
        throw err;
    }
    countriesContainer.style.opacity = 1; // can put this outside catch block so it will always be executed
};

// this is a bit cleaner than using fetch.... maybe?

const city = whereAmI();
console.log(city); // returns the pending promise because the code hasn't been blocked
// what we return from the async function will be returned by the promise created in the background by the async function
// so we can only access any returned values using .then

whereAmI().then(city => console.log(city));

// BUT the promise in the async function is still fulfilled even if something goes wrong in the code, we'll just never get the return value so the city in .then will equate to undefined
// if want to catch this have to manually reject the promise in the async function from the catch block

// try / catch

try {
    let y = 1;
    const x = 2;
    x = 2;
}
catch (err) {
    alert(err.message); // script no longer dies and we can handle the error accordingly
}

// can we re-write the above code using only async await using an IFE

(async function(){
    try {
        const city = await whereAmI();
        console.log(city);
        console.log('finished getting location');
    }
    catch (err) {
        console.error(err.message);
    }
})();

// running promises in parallel where the order the data arrives doesn't matter at all

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function(c1, c2, c3){
    try {
        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`)
        ]); // takes in an array of promises and returns a new promise that does all 3 at the same time rather than having to run them in sequence - much faster!!
        console.log(data.map(d => d[0].capital));
    }
    catch (err) {
        console.error(err.message);
    }
};

// BUT if 1 promise rejects the whole promise rejects! (known as short circuits)
// if not using async await can handle result with .then
get3Countries('portugal', 'canada', 'tanzania');

// promise combinators

// Promise.race - receives an array of promise and returns a promise but settles as soon as 1 promise settles (doesn't matter if rejected or fulfilled)

(async function() {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/italy`),
        getJSON(`https://restcountries.com/v3.1/name/egypt`),
        getJSON(`https://restcountries.com/v3.1/name/mexico`)
    ]);
    console.log(res[0]); // might get a different one each time - so you only get 1 result not an array of all 3 results
    // still short circuits if 1 promise is rejected and that happens first
    // very useful to prevent against never-ending promises and super slow loading times
})();

const timeout = function(s) {
    return new Promise(function(_, reject){
        setTimeout(function(){
            reject(new Error('Request took too long!'));
        }, s * 1000);
    });
}

Promise.race([
    timeout(1),
    getJSON(`https://restcountries.com/v3.1/name/italy`)
])
.then(res => console.log(res[0]))
.catch(err => console.error(err));

// this will error if the asset takes more than 1 second to load

// Promise.allSettled - returns an array of all the settled promises but withOUT short circuiting, results will be returned whether they are rejections or resolutions

Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success')
])
.then(res => console.log(res)); // returns an array but the status of the middle response is rejected

// Promise.any - ignores rejected promises and returns the first successful promise (unless they all reject)

Promise.any([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another success')
])
.then(res => console.log(res));