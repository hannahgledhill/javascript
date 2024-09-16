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
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

tabsContainer.addEventListener('click',function(e){
    e.preventDefault();

    // problem with e.target because there are lots of children within the tab
    const clicked = e.target.closest('.operations__tab'); // will get the parent or the element itself if that is what was clicked
    if (!clicked) return; // have to handle the event that clicked is null
    
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');  

    tabsContent.forEach(t => t.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// menu fade animation

const handleHover = function(e) {
    if (e.target.classList.contains('nav__link')) { // don't need closest methods because there are no children we could accidentally click
        const link = e.target;
        const siblings = nav.querySelectorAll('.nav__link');
        const logo = nav.querySelector('img');

        siblings.forEach(el => {
            if (el !== link) el.style.opacity = this;
            logo.style.opacity = this;
        });
    }
}
// the bind allows us to pass in a "this" argument, if need more than one argument can pass in an array of arguments
nav.addEventListener('mouseover', handleHover.bind(0.5)); // mouseenter does not bubble whereas mouseover does, opposite is mouseout rather than mouseleave
nav.addEventListener('mouseout', handleHover.bind(1));

// sticky navigation

// this is not a very efficient way of doing it because the scroll event fires millions of times
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function(e){
//     window.scrollY > initialCoords.top ? nav.classList.add('sticky') : nav.classList.remove('sticky');
// });

const stickyNav = function(entries) { 
    const [entry] = entries; // this is the same as writing entries[0]
    entry.isIntersecting ? nav.classList.remove('sticky') : nav.classList.add('sticky'); // add the sticky class when the header section is NO LONGER visible
};

const stickyNavOptions = {
    root: null, // elements target is intersection, use null for entire viewport
    threshold: 0, // percentage of intersection at which the callback will be called, can have multiple thresholds in an array
    rootMargin: `-${nav.getBoundingClientRect().height}px`, // a box of -90 pixels that will "buffer" the target section, ie. trigger threshold 90 pixels before
};

const headerObserver = new IntersectionObserver(stickyNav, stickyNavOptions);
headerObserver.observe(header);

// revealing sections on scroll
// use a class that sets the opacity to 0 so they preserve their height but are not visible, then remove the class as you approach the sections

// const allSections = document.querySelectorAll('.section')
// const revealSection = function(entries, observer) {
//     const [entry] = entries;
//     if (!entry.isIntersecting) return;

//     entry.target.classList.remove('section--hidden');
//     observer.unobserve(entry.target); // remove the observer once you've been through the section
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//     root: null,
//     threshold: 0.15,
// });

// allSections.forEach(section => {
//     section.classList.add('section--hidden'); // good idea to add the section in JS in case people have JS disabled in their browser
//     sectionObserver.observe(section);
// });

// lazy loading images
// have a very low resolution image that is really small (like 200px wide) that is loaded in the begining with a lazy-img class that blurs it, reference real image in data-src

const imgTargets = document.querySelectorAll('img[data-src]'); // select all the elements that have the data-src attribute
const loadImg = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function(e){ this.classList.remove('lazy-img') }); // only remove the blur class once the image has actually loaded
    observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px', // load them early so the user doesn't see any delay
});
imgTargets.forEach(img => imgObserver.observe(img));

// slider
// slides are all side by side, we use translateX with multiples of 100% to move between the slides 
// have a transition: transform 1s; on the .slide class

const slider = function() {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    const maxSlide = slides.length -1;
    let curSlide = 0;
    let allDots;

    const createDots = function() {
        slides.forEach((_, i) => {
            dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
        });
        allDots = document.querySelectorAll('.dots__dot');
    };

    const activateDot = function(slide) {
        allDots.forEach(dot => dot.classList.remove('dots__dot--active'));
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    }

    const goToSlide = function(slide) { 
        slides.forEach((s, i) => s.style.transform = `translateX(${(i - slide) * 100}%)`);
        activateDot(slide);
    };

    const nextSlide = function() {
        curSlide === maxSlide ? curSlide = 0 : curSlide++;
        goToSlide(curSlide);
    };

    const prevSlide = function() {
        curSlide === 0 ? curSlide = maxSlide : curSlide--;
        goToSlide(curSlide);
    };

    const init = function() {
        createDots();
        goToSlide(0);
        btnRight.addEventListener('click', nextSlide);
        btnLeft.addEventListener('click', prevSlide);

        document.addEventListener('keydown', function(e){
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
            // could write as e.key === 'ArrowLeft' && prevSlide() due to short circuiting
        });

        dotContainer.addEventListener('click', function(e){
            if (e.target.classList.contains('dots__dot')) {
                const slide = e.target.dataset.slide;
                goToSlide(slide);
            }
        });
    };

    init();
};

slider(); // putting everything in a function means we don't pollute the global namespace, this is also basically how classes work, can also have an options object which means we can use the same slider in multiple instances on the same site







