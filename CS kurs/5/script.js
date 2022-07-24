let textTag = document.querySelector('.section1 h1');
let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = '';
for (let i = 0; i < splittedText.length; i++) {

    if (splittedText[i] === ' ') splittedText[i] = "&nbsp;";

    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let k = 0;
let interval = setInterval(() => {
    let spans = textTag.querySelectorAll('span');
    let singleSpan = spans[k];

    singleSpan.className = 'fadeMove';

    k++

    if (k === spans.length) clearInterval(interval);
}, 70);


let border = document.querySelector('.border-line');
let animationWidth = 0;

window.onscroll = () => {
    if (this.oldScroll > this.scrollY) {
        animationWidth -= 1.5;
    } else {
        animationWidth += 1.5;
    }
    if (animationWidth >= 100) {
        animationWidth = 100;
    } else if (animationWidth <= 0) {
        animationWidth = 0;
    }

    border.style.width = animationWidth + '%'

    this.oldScroll = this.scrollY;

    imageAnimation()

    if (leftImage.classList.contains('animated')) {
        leftBtn.innerText = 'Zatvori Sliku'
    } else {
        leftBtn.innerText = 'Prikazi Sliku'
    
    }
    if (rightImage.classList.contains('animated')) {
        rightBtn.innerText = 'Zatvori Sliku'
    } else {
        leftBtn.innerText = 'Prikazi Sliku'
    }
}

const imageAnimation = () => {
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');
    if (sectionPosition < screenPosition) {
        leftImage.classList.add('animated');
        rightImage.classList.add('animated');
    }
}

let textButton = document.querySelector('.section1 button');
const randomInRange = (min, max) => Math.random() * (max - min) + min;

textButton.addEventListener('click', e => {
    let parentEl = textButton.parentNode;
    let spans = parentEl.querySelectorAll('h1 span');
    if (e.target.innerText === 'Animiraj tekst') {
        spans.forEach(span => {
            span.style.animation = 'textAnimation 2s linear infinite';
            span.style.color = `rgb(${randomInRange(0, 255)}, ${randomInRange(0, 255)}, ${randomInRange(0, 255)})`
            e.target.innerText = 'Zaustavi animaciju';
        })
    } else {
        spans.forEach(span => {
            span.style.animation = '';
            span.style.color = 'white';
            e.target.innerText = 'Animiraj tekst';
        })
    }
})

let minusBtn = document.querySelector('.minus-btn');
let plusBtn = document.querySelector('.plus-btn');

minusBtn.addEventListener('click', () => {
    if (animationWidth >= 5) {
        animationWidth -= 5;
        border.style.width = animationWidth + '%'
    } else if (animationWidth > 0 && animationWidth < 5) {
        animationWidth = 0;
        border.style.width = animationWidth + '%'
    }
})

plusBtn.addEventListener('click', () => {
    if (animationWidth <= 95) {
        animationWidth += 5;
        border.style.width = animationWidth + '%'
    } else if (animationWidth > 95 && animationWidth < 100) {
        animationWidth = 100;
        border.style.width = animationWidth + '%'
    }
})

let leftBtn = document.querySelector('.leftButton');
let rightBtn = document.querySelector('.rightButton');
let leftImage = document.querySelector('.slideFromLeft');
let rightImage = document.querySelector('.slideFromRight');

leftBtn.addEventListener('click', () => {
    if (leftBtn.innerText === 'Prikazi Sliku') {
        leftImage.classList.add('animated');
        leftBtn.innerText = 'Zatvori Sliku';
    } else if (leftBtn.innerText === 'Zatvori Sliku') {
        leftImage.classList.remove('animated');
        leftBtn.innerText = 'Prikazi Sliku';
    }
})

rightBtn.addEventListener('click', () => {
    if (rightBtn.innerText === 'Prikazi Sliku') {
        rightImage.classList.add('animated');
        rightBtn.innerText = 'Zatvori Sliku';
    } else if (rightBtn.innerText === 'Zatvori Sliku') {
        rightImage.classList.remove('animated');
        rightBtn.innerText = 'Prikazi Sliku';
    }
})