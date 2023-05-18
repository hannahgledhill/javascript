/***
 * objects are self-contained pieces of code containing properties and methods
 * they can interact with one another using a public interface (API) - these are methods that the code outside of the object can access and use to communicate with the object
 * 
 * a class is a blueprint from whihc you can create new objects
 * js doesn't actually have classes as such, but a similar concept
 * 
 * an object created through a class is an instance, and it has actual definitions for all the properties
 * so different instances will have different data and values
 * 
 * there are 4 fundamental principles of designing good classes, or OOP:
 * 1. abstraction - ignoring or hiding details that don't matter - basically don't include properties you don't really need to know
 * 2. encapsulation - some props and meths will be PRIVATE inside the class, they are not accessible from outside the class. other methods can be EXPOSED as a public interface (API)
 * 3. inheritance - child classes can extand parent classes, inherit all the props and meths of the parent class but have a few others too
 * 4. polymorphism - a child class can overwrite a method it inherited from a parent class, just write a new method that is also called login and it will overrule the old one
 * 
 * in actual JS have PROTOTYPES which are basically classes
 * "children" are objects that are linked to the prototype
 * "prototypal inheritance" is where objects linked to a prototype object (an instance) inherit all the props and methods of the prototype
 * also say that behaviour is "delegated" from the prototype to the linked object
 * basically if you want to change any of the behaviour, you have to change the prototype
 * 
 * there are 3 ways to create prototypes in JS:
 * 1. constructor functions - create objects programatically using a function
 * 2. ES6 classes - more modern way but are actually just a layer of abstraction over constructor functions and use prototypal inheritance
 * 3. Object.create() method - easiest, but not that often used
 * 
 * 
 * 
 * 
*/