/**
 * for (let i = 0; i < 10; i++) {
 *      ...
 * }
 *
 * looping through array
 *
 * for (let i = 0; i < myArray.length; i++) {
 *  console.log(myArray[i]);
 * }
 *
 * as long as you use < can still use myArray.length, if it was <= would need to use myArray.length -1
 *
 * continue -- exit current iteration of loop and continue to next one (basically skip)
 * break -- exit the entire loop
 *
 * for (let i = 0; i < myArray.length; i++) {
 *  if (typeof myArray[i] === 'string') {
 *      console.log(myArray[i]);
 *  }
 *  else {
 *      continue;
 *  }
 * }
 *
 * for (let i = 0; i < myArray.length; i++) {
 *  if (typeof myArray[i] === 'number') {
 *      break;
 *  }
 *  else {
 *      console.log(myArray[i]);
 *  }
 * }
 *
 * backwards loop:
 *
 * for (let i = myArray.length -1; i >= 0; i--) {
 *  ...
 * }
 *
 * while loop:
 *
 * let count = 0;
 * while (count < 10) {
 *  ...
 *  count++;
 * }
 *
 * roll until you get 6:
 *
 * const rollDice = () => Math.trunc(Math.random() * 6) + 1;
 * let dice = rollDice();
 * while (dice !== 6) {
 *  console.log(`you rolled a ${dice}`);
 *  dice = rollDice();
 *  if (dice === 6) {
 *     console.log(`you rolled a ${dice} - well done!!`); // have to have this because if the first roll happened to be a 6 the loop would never run, and if you rolled a 6 you wouldn't know
 *  }
 * }
 *
 *
 */

console.log();
