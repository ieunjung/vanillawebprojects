document.addEventListener('DOMContentLoaded', () => {
    // keypress event
    document.addEventListener('keypress', e => {
        const keyStr = e.key.toLocaleLowerCase();
        driveCar(keyStr);
        turnLight(keyStr);
    })
})

function driveCar(key) {
    if (key !== 'enter' && key !== ' ') {
        return;
    }

    // variables
    const surface = document.querySelector('.surface');
    const car = document.querySelector('.car');

    toggleClass(surface, 'moveRight');
    toggleClass(car, 'suspension');
}

let lightFlag = true;

function turnLight(key) {
    if (key !== 'w') {
        return;
    }

    const carImg = document.querySelector('.car img');
    const cars = ['./assets/Img_05.png', './assets/Img_06.png'];

    if (lightFlag) {
        carImg.setAttribute('src', cars[0]);
    } else {
        carImg.setAttribute('src', cars[1]);
    }

    lightFlag = !lightFlag;
}

function toggleClass(selector, className) {
    if (selector.classList.contains(className)) {
        selector.classList.remove(className)
    } else {
        selector.classList.add(className)
    }
}