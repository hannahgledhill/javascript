/***
 * 
 * primitives are numbers, strings, booleans etc. They are storred in the call stack in the JS engine in their own execution contexts
 * primitives point to addresses in memory, when a variable is re-assigned it is given a new memory address with the new value
 * 
 * objects are storred in the memory heap in javascript's engine, independent of the call stack
 * objects point to address in memory which in turn points to the object in the heap
 * so if you "copy" an object like const me = {obj...} and then friend = me, both friend and me are pointing to the same object in the heap, if you change one you change them both
 * you aren't really copying the object, you're just copying the reference which is pointing to the same object
 * this is why you have to create new INSTANCES of objects and classes in order to create a new thing in the heap
 * 
 * to fully create a new copy of an object that is thoroughly independent from the original do
 * 
 * const copy = Object.assign({}, origObject);
 * Object.assign is merging 2 objects into a new objects. By merging with an empty object we create an exact copy of the original object
 * we can now change properties and methods of the copy without affecting the original
 * 
 * BUT if there is an inner object or an array within the original object this will not be properly copied
 * Object.assign only creates a "shallow clone"
 * that means deeply nested objects won't be properly copied
 * for creating a "deep clone" would use a library like lodash
 * 
 */