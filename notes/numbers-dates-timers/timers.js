// settimeout - runs once after a defined time
// setinterval - runs repeatedly at intervals

setTimeout(()=> console.log('Here is your pizza'), 3000); // 1 second is 1000 milliseconds
// any arguments apssed after the milliseconds will be arguments passed to the function

const ingredients = ['olives, spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1}, ${ing2}`, 3000, ...ingredients));

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer); // deletes the timer

// setInterval
setInterval(() => {
    const now = new Date();
    console.log(now);
}, 1000);
