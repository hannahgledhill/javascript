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