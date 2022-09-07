/**
 * as of ES2022 we can use the await keyboard outside of async functions but only INSIDE modules
 * BUT this still blocks the UI and behaves synchronously, because it is not within an async function
 * can be useful in some situations though where you actually do want to block the UI
 * 
 */

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);

// declaring it inside an async function makes it async and non blocking, BUT returns a PROMISE

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
}

const lastPost = getLastPost();
lastPost.then(post => console.log(post)); // can use then to wait to promise to resolve, then do something with it

// or can replace then with top level await

const lastPostResolved = await getLastPost();

// NOTE if an exporting module uses a top-level await, the importing module will WAIT for the exporting to execute all its blocking code. so await ALWAYS blocks