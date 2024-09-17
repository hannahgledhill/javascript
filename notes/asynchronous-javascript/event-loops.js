/***
 * event loop stores callbacks in a queue not in the call stack (the main thread of the execution)
 * how does JS handle multiple asynchronous events?????
 * 
 * pending promises live in the "web apis" environment
 * as they finish, the callback for that promise/event is put into the callback queue
 * they are then taken out of the queue into the call stack to be executed
 * so callbacks in the queue can only execute 1 at a time
 * so a timer's callback may actually run after 6 seconds not 5 etc. if there are a lot of callbacks in the queue
 * our only guarantee is that the timer will not run BEFORE 5 seconds
 * 
 * callback queue also contains events from the dom like button clicks, scrolls etc.
 * this is why it is bad to have an event listener on scroll!
 * 
 * event loop - looks into the call stack and determines whether its empty (ie. no code currently being executed) and if it is empty takes a callback from the queue and plaes it in the call stack
 * this is called an "event loop tick"
 * basically does the "orchestration of the entire javascript runtime"
 * 
 * BUT callbacks related to promises do not go into the callback queue, instead they go into a special "microtasks queue" which has priority over the callback queue, orchestrated by the eevnt loop
 * event loop will run ALL microtasks BEFORE ANYTHING from the callback queue
 * this can be bad if we keep adding more and more microtasks!
 * 
 * 
 */