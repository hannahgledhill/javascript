/**
 * 
 * high level -- any computer program needs hardware resources like ram and cpu, low-level languages like C manually manage resources and developer can ask memory to create space for new variable
 * high-level languages mean developer doesn't have to do any of this, everything happens automatically
 * "abstractions" take all this work away from us, though the problem will never be as fast or as optimised as low level language programmes
 * 
 * garbage collection -- algo inside the JS engine that automatically removes old unused objects from the computer memory in order to not clog it up
 * 
 * interpreted / just in time compiled -- computer's processor only understands 0s and 1s (machine code), interpreting/compiling is compiling the human readable code into machine code
 * 
 * multi-paradigm -- a paradigm is an approach/mindset of structuring code, which will direct your coding style and technique (like procedural vs object oriented vs functional)
 * paradigms can be imperative or declarative
 * multi-paradigm means you can choose how you want to write
 * 
 * prototype-based object-oriented -- everything in JS is an object except for primitives such as Numbers, Strings etc. even arrays are objects - they have properties and methods
 * prototypal inheritance (the Array class which is like a template) means new arrays we create inherit all the properties and methods of the prototype
 * 
 * first-class functions -- functions are treated like regular variables, can pass functions into other functions and can return funtions from functions, like function factories
 * 
 * dynamically typed language -- we don't have to assign data types to variables, can reassign a variable to be a different type - the type only becomes known when the code is compiled
 * typescript lets you use js with types which is useful to prevent bugs in code
 * 
 * concurrency model -- how the javascript engine handles multiple tasks happening at the same time
 * 
 * single threaded -- javascript runs in one single thread on the processor, so it can only do 1 thing at a time
 * a thread is a set of instructions executed in the CPU
 * a long-running task like fetching data from a remote server would block the thread
 * we don't want this....
 * 
 * event loop -- takes long-running tasks, executes them in the "background" and puts them back in the main thread once they are finished
 * 
 */