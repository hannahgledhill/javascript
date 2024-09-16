/***
 * detect changes to the way a target element intersects other elements or the viewport
 * basically an element "intersects" the viewport as soon as it scrolls into view
 * a 0.1 threshold will be triggered when 10% of the target (eg. section) is in view 
 * better than window.scroll because it is only called when a change happens
 * a 0 threshold will be called each time the target element moves completely out of the view and also as soon as it enters the view (in either direction)
 * 1 would only be called if 100% of the target is visible 
 * 
 * we want the nav to become sticky when the header moves completely out of view
*/

const stickyNav = function(entries) { // will be called each time the target element intersects the root element at the threshold we defined
    // entries is an array of the threshold values
    const [entry] = entries; // this is the same as writing entries[0]
    entry.isIntersecting ? nav.classList.remove('sticky') : nav.classList.add('sticky');
};

const stickyNavOptions = {
    root: null, // elements target is intersection, use null for entire viewport
    threshold: 0, // percentage of intersection at which the callback will be called, can have multiple thresholds in an array
};

const header = document.querySelector('header');
const headerObserver = new IntersectionObserver(stickyNav, stickyNavOptions);
observer.observer(header);