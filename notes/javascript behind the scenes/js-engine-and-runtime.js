/***
 * 
 * a JS engine is a program that executes javascript code
 * one of the most popular is google's v8 which powers the chrome browser and nodejs
 * 
 * any JS engine always contains a call stack and a heap
 * 
 * the call stack is where our code is actually executed using something called execution contexts (basically a queue)
 * the heap is an unstructured memory pool which stores all the objects the application needs
 * 
 * compilation -- the entire code is converted into machine code at once, and written to a binary file that can be executed on any computer
 * execution can happen multiple times, way after the single compilation
 * 
 * interpretation -- the source code is read, converted and executed line by line -- much slower than compiled languages!
 * 
 * JS used to be interpretation based, but it is now uses a mix called JIT compilation
 * 
 * entire code is converted into machine code at once each time it is run, then executed immediately
 * so still 2 steps - compilation, then execution but no portable file to execute
 * much faster still than interpretation
 * 
 * when a piece of JS enters the engine, the first step is "parse" or read it, the code is parsed into a data structure called the Abstract Syntax Tree (AST) 
 * the AST first splits up the code into pieces that are meaningful to the language like keywords and then saves them to the tree in a structured way, checking for syntax errors
 * the resulting tree is then compiled into machine code and executed in the call stack
 * 
 * modern JS engines create a very unoptimised version of the machine code in the begining just so that it can start executing as fast as possible
 * then in the background this code is being optimised an re-compiled during the already running program execution
 * after each round of optimisation, the resulting code is simply swapped for the previous without stopping the execution
 * 
 * the most common runtime for javascript is the browser 
 * a runtime is a big container which includes all the things that we need to use js
 * the heart of any runtime is the engine
 * also includes web APIs like the DOM, Timers, Fetch, Console etc. - functionalities provided to the engine which js can access through the global window object but are not actually part of the javascript language
 * 
 * then callback queue - data structure containing all the callback functions ready to be executed (like eventHandlers, timers etc.)
 * when the event happens the function is added to the callback queue
 * when the call stack is empty the function is passed from the callback queue to the stack so that it can be executed -- this is the event loop
 * this is essential for javascript's non-blocking concurrency model
 * 
 * BUT JS can also exist outside of browsers like in nodejs
 * has engine, callback queue and event loop but no web apis, instead has C++ bindings and a thread pool 
 * 
 */