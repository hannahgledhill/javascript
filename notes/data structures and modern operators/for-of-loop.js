/***
 * 
 * will give access to each array element
 * easier than a for loop and kind of easier than a foreach too I guess!
 * can still use the continue and break keyword which you can't always use in other array looping methods
 * BUT difficult to get array index
 * 
 */

 const menu = [1,2,3,4,5,6,7,8,9,0];
 for (const item of menu) console.log(item);

 // to get index

 for (const item of menu.entries()) console.log(item);
 // each item would be an array with item[0] being the index and item[1] being the value

 // can destructure within the expression quite nicely
 for (const [i, el] of menu.entries()) console.log(`${i}: ${el}`);

 