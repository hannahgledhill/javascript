/** destructuring is a way of unpacking values from an array/object into separate variables
 * retrieve elements from an array and store them
 * 
 * const arr = [2, 3, 4];
 * const [x, y, z] = arr; // this copies the values of arr into the variables x, y and z
 * original array is unaffected
 * 
 * could also do const [x, y] = arr; // this would only take [0] and [1]
 * could do [x, , y] = arr; // this would get [0] and [2], can skip elements
 * 
 * can switch variables
 * let [first, second] = arr; // first is 2 and second is 3
 * [first, second] = [second, first];
 * // first would now be 3 and second would no be 2
 * 
 * nested arrays
 * const nested = [2, 4, [5, 6]];
 * const [i, ,j] = nested;
 * i = 2
 * j = [5, 6]
 * 
 * or can fully destructure
 * const [i, , [j, k]] = nested
 * gives i = 2, j = 5, k = 6
 * 
 * can set default values when don't know the length of the array
 * const [p=1, q=1, r=1] = [8, 9]; // would end up with p=8, q=9, r=1
 * 
 */