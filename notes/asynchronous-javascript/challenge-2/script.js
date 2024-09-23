'use strict';

let currImg;

const wait = function(s) {
    return new Promise((resolve) => {
        setTimeout(resolve, s * 1000);
    });
};

const createImage = function(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.classList.add('image');
        img.src = imgPath;
        img.addEventListener('load', e => resolve(img));
        img.addEventListener('error', e => reject(new Error('image failed to load')));
    });
};

const loadImage = function(img) {
    if (currImg) currImg.style.display = 'none';
    currImg = img;
    document.querySelector('body').appendChild(currImg);
};

const loadAndPause = async function() {
    try {
        const img1 = await createImage('img-1.jpg');
        loadImage(img1);
        await wait(2); // don't need to declare a const because we don't return anything

        const img2 = await createImage('img-2.jpg');
        loadImage(img2);
        await wait(2);

        const img3 = await createImage('img-3.jpg');
        loadImage(img3);
    }
    catch (err) {
        console.error(err);
    }
};

const loadAll = async function(imageArray) {
    try {
        const imgs = await Promise.all(imageArray.map(img => createImage(img)));
        console.log(imgs);
        imgs.forEach(img => {
            img.classList.add('parallel');
            document.querySelector('body').append(img);
        });
    }
    catch (err) {
        console.error(err);
    }
};

loadAll(['img-1.jpg', 'img-2.jpg', 'img-3.jpg']);

// createImage('img-1.jpg')
//     .then(img => {
//         loadImage(img);
//         return wait(2);
//     })
//     .then(() => createImage('img-2.jpg'))
//     .then(img2 => {
//         loadImage(img2);
//         return wait(2);
//     })
//     .then(() => createImage('img-3.jpg'))
//     .then(img3 => {
//         loadImage(img3)
//     })
//     .catch(err => console.error(err));