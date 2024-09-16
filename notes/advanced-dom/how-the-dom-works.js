/*** 
 * the dom is the interface between the JS code and the browser
 * dom tree is generated from a html document
 * dom is a complex API with lots of methods and properties eg. querySelector, addEventListener methods and .textContent, .innerHTML properties
 * 
 * every node in the dom tree is an object of type node with methods such as cloneNode() and properties such as parentNode
 * the node type has child types: element, text, comment and document
 * the element has a childtype HTMLElement and that has child types like HTMLButtonElement, HTMLDivElement, HTMLImgElement etc.
 * 
 * what makes all this work is inheritance
 * all the child types get access to all the methods and properties of their parent types
 * so the HTMLElement is also an Element and also a Node
 * 
 * all the nodes types need a way to listen to events
 * there is a special node type called EventTarget that is a parent to node and window so we can use addEventListener and removeEventListener on all child objects within the dom
 * 
 * 
 */

// selecting elements

console.log(document.documentElement); // selects the entire document, can use to apply css styles to the entire page
console.log(document.head); // the actual <head></head>
console.log(document.body); // the entire visible body

document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // returns a nodelist

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // all the <button></button>, but returns an HTML Collection - if the dom changes this collection is also updated automatically and dynamically!

document.getElementsByClassName('btn'); // also returns a live HTML Collection

// creating and inserting elements

// .insertAdjacentHTML - lets you put in html with ${} etc

header.prepend(message);
header.append(message); // element cannot be in more than one place, so this moves it from being the first child to being the last child
header.prepend(message.cloneNode(true)); // create a copu
header.before(message); // put message before header
header.after(message); // put message after ehader

// styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // returns nothing - the style property only works for inline styles set using the style property, can't read from a css stylesheet
console.log(getComputedStyle(message).color); // returns the actual computed styles as it appears on the page
console.log(getComputedStyle(message).height); // will return the height in the browser... but it returns a string including px
message.style.height = Number.parseFloat(getComputerStyle(message).height) + 30 + 'px';

// css variables (custom properties) - :root in css is equivalent to the document.documentElement in js

document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // returns actual not relative url!
console.log(logo.getAttribute('src')); // returns the relative url - same is true for the href attribute on links
console.log(logo.className);
console.log(logo.getAttribute('designer'));
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');

// data attributes

console.log(logo.dataset.versionNumber); // have to transform to camelCase

// classes

logo.classList.add(); // can pass in multiple values
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains(); // return boolean

// DON'T USE logo.className = 'jonas' because that will overwrite ALL the classes and you can only add 1 class
console.log('current scroll x/y ', window.scrollX, window.scrollY); // distance from the VIEWPORT to the top of the document etc.
console.log('height and width of viewport ', document.documentElement.clientHeight, document.documentElement.clientWidth);

// dom traversing

const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlight')); // to select children with this class, works no matter how deep it needs to go within the tree as long as they are children of the h1 element
console.log(h1.childNodes); // gets only direct children, including text nodes and html comments
console.log(h1.children); // gives live html collection of the 3 actually useful elements within the h1, but only direct children
console.log(h1.firstElementChild); // only the first element inside (element has to have <>html tags)
console.log(h1.lastElementChild);

console.log(h1.parentNode);
console.log(h1.parentElement); // currently the same because the parent element is the node but this is more used
console.log(h1.closest('.header')); // finds the closest element UP the tree, can also return the current element if the selector also matches the current element, like the opposite of querySelector
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// siblings

console.log(h1.previousElementSibling); // returns null if this is the first element
console.log(h1.nextElementSibling);
// can also use previousSibling and nextSibling but these would be nodes which could be text or comments (useful sometimes!)
console.log(h1.parentElements.children); // workaround to get all the siblings (including itself), returns an HTML collection
[...h1.parentElement.children].forEach(function(el){
    if (el !== h1) el.style.transform = 'scale(0.5)';
});








