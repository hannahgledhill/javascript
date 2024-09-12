'use strict';

// elements

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const message = document.createElement('div');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    console.log('click');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// cookie message

message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
header.append(message); // element cannot be in more than one place, so this moves it from being the first child to being the last child

document.querySelector('.btn--close-cookie').addEventListener('click', function() {
    message.remove();
    // message.parentElement.removeChild(message); // how it used to be done
});

// smooth scrolling

btnScrollTo.addEventListener('click',function(e){
    e.preventDefault();
    const s1coords = section1.getBoundingClientRect(); // x and y coordinates are distance fom the top and left RELATIVE TO THE VIEWPORT TOP, not the document
    console.log('current scroll x/y ', window.scrollX, window.scrollY); // distance from the VIEWPORT to the top of the document etc.
    console.log('height and width of viewport ', document.documentElement.clientHeight, document.documentElement.clientWidth);

    // window.scrollTo(s1coords.left, s1coords.top); // this is a bit hit and miss because it is relative to the viewport
    // window.scrollTo({
    //     left: s1coords.left + window.scrollX, 
    //     top: s1coords.top + window.scrollY,
    //     behaviour: 'smooth'
    // }); // have to add current offset from top of viewport to determine absolute position of the element relative to the DOCUMENT

    // more modern way
    section1.scrollIntoView({ behaviour: 'smooth' });
});

// page navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.preventDefault();
//         console.log('LINK');
//         const id = this.getAttribute('href'); // want the relative not absolute
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     });
// }); // not really efficient because we are adding the same function to all these elements, lots of copies of the same function

// use delegation to put the event on a common parent that all the elements are interested in 
// 1. add event listener to common parent element
// 2. in event listener determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

// using this methods also lets you preset event listeners that will work with elements that are dynamically added later on in the runtime!!

// tabbed component

const tabs = document.querySelectorAll('.opeartions__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click',function(e){
    e.preventDefault();
    // problem with e.target because there are lots of children within the tab
    const clicked = e.target.closest('.operations__tab'); // will get the parent or the element itself if that is what was clicked
    
});
