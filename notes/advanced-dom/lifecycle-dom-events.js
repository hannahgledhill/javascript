/***
 * the lifecycle of the dom is the time from when the page first loads to when the user leaves it
 * first event is domContentLoaded - happens when the HTML is downloaded and completely parsed (ie. converted to the dom tree), also all scripts must be parsed and executed first - so the page and all its elements are fully loaded..... though it doesn't wait for images or external data sources
 * don't need this if the js is loaded at the bottom of the page
 */

document.addEventListener('DOMContentLoaded', function(e){
    console.log('HTML fully loaded', e);
});

window.addEventListener('load', function(e){
    console.log('Page fully loaded inc images and resources', e); // fired after all images and external files like css etc. are all loaded
});

window.addEventListener('beforeunload', function(e){
    e.preventDefault();
    console.log('the user has clicked close button', e); 
    e.returnValue = ''; // creates are you sure you want to leave confirmation, best to only do this if the user is in the middle of filling out a form or something
});

/*** 
 * ways to load scripts in html:
 * 
 * <script src="script.js"></script>
 * if loaded in the head the whole script must be executed BEFORE the html parsing can continue
 * if loaded at body end won't delay page load and all html elements will be parsed
 * 
 * <script async src="script.js"></script>
 * used in head, script is loaded at the same time as the html is parsed but then executes once it has downloaded, pausing the html
 * so slower than the body end but quicker than regular if you need to put it in the head
 * DOMContentLoaded event won't really work
 * not guaranteed to execute in the order they are declared in the code
 * used for 2rd party scripts your code doesn't rely one such as google analytics
 * 
 * <script defer src="script.js"></script>
 * used in head, script is fetched asynchronously at the same time as the html is parsed, but script only executes once html has finished parsing, so MUCH quicker
 * actually quicker than loading in body
 * DOMContentLoaded will work
 * 
 * BUT remember old browsers won't support async and defer
 */