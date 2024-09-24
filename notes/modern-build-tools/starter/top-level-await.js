// can use await outside of an async function as long as it is in a module

console.log('start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
// BUT this blocks execution of the entire module!!!
console.log('finished');

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return {
        title: data.at(-1).title,
        text: data.at(-1).body
    }
}
console.log('something');

getLastPost().then(last => console.log(last)); // we only need this because the return is executed before the promise resolves
// but not very clean, this is where we can use top level await

const lastPost2 = await getLastPost();
console.log(lastPost2);

// remember if one module is importing a module that as a top level await, the importing module will have to wait for the blocking code to execute in the exporting module - so use with caution!