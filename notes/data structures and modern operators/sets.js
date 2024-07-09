/*

a collection of unique values that cannot have duplicates

let ordersSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto']);

would only return 1 pasta

can use property ordersSet.size;
remember it is not length like in arrays!

can do ordersSet.has('Pizza') would return true
similar to includes method in arrays

ordersSet.add('Garlic Bread');

ordersSet.delete('Risotto');
much easier than trying to do this in arrays!

BUT can't access elements through index like ordersSet[0]
items in a set aren't ordered, but can iterate them using for loop

main use case of sets is to remove duplicate values from arrays
can make an array using a set of an array

eg. const staff = ['waiter', 'chef', 'waiter', 'manager'];
const uniqueStaff = [...new Set[staff]];

can count letters in a string
console.log(new Set('hannah farnes').size);

*/