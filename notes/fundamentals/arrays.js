/**
 * console.log(array[array.length -1]) -- can put expressions inside the square brackets - remember expressions must return a value
 * 
 * can mutate VALUES in arrays even if they were declared with const - what we can't do is replace the entire array
 * 
 * can even put variables and expressions inside arrays eg. const jonas = [$firstname, 'Schmedtmann', 2023-1991, calcAge(1991)];
 * function expressions and variable declarations will always be run first before the array assignment
 * 
 * myArray.push(newElement) -- push adds a new element to the end of an array
 * can actually assign the push to a variable and use it, it will still push the element to the array as well! but it doesn't have to be purely procedural
 * 
 * myArray.unshift(newElement) -- unshift adds an element to the begining of an array
 * NOTE if you console.log push or unshift they return the length of the array
 * 
 * myArray.pop(element) -- returns (and removes) the last element of the array
 * myArray.shift(element) -- returns (and removes) the first element of the array
 * 
 * myArray.indexOf('element') -- returns the index at which this element is located (or -1 if element not found)
 * myArray.includes('element') -- returns true or false depending on whether element is found in array or not (ES6), NOTE uses STRICT equality so '23' would not be found if you searched for 23 
 *
 * 
 */