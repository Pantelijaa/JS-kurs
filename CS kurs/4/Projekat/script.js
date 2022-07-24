/* 
    Responsive Meni
*/
let mobileMenu = document.querySelector('#mobile-menu');

mobileMenu.addEventListener('click',() => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if (btn.innerText === 'MENU') {
    menu.style.display = 'block';
    btn.innerText = 'CLOSE';
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
})

/* 
    Galerija 
*/

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

// Pomeramo slike u desno
const moveRight = () => {
    displayNone(pictures);
    imgNum++;
    if (imgNum === pictures.length) imgNum = 0;
    pictures[imgNum].style.display = 'block';
}

// Pomeramo slike u desno
const moveLeft = () => {
    displayNone(pictures);
    imgNum--;
    if (imgNum === -1) imgNum = pictures.length -1;
    pictures[imgNum].style.display = 'block';
}
// Event listeneri za strelice
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

const displayNone = e => {
    e.forEach(img => {
        img.style.display = 'none';
    })
}
/*
    Portfolio
*/

const SortBtns = document.querySelectorAll('#portfolio-sort');
SortBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let category = btn.getAttribute('data-category');
        let portfolioItems = document.querySelectorAll('.portfolio-single-item');

        portfolioItems.forEach(item => {
            item.style.display = 'none';

            if (category === 'sve') {
                portfolioItems.forEach(item => {
                    item.style.display = 'block';
                    return;
                });
            }

            if (item.getAttribute('data-category').includes(category)) {
                item.style.display = 'block';
            }
        });
    })
})
/*
    Otvaramo modal
*/

let openModal = document.querySelectorAll('#openModal');
openModal.forEach(modal => {
    modal.addEventListener('click', () => {
        let modalWindows = document.querySelectorAll('.popup-modal');
        let overlay = document.querySelector('.overlay');

        let id = modal.innerText;
        id = id.substring(id.length -1);

        modalWindows[id - 1].style.display = 'block';
        overlay.style.display = 'block';
        
    })
})


/*
Zatvaramo modal
*/
let closeModal = document.querySelectorAll('#closeModal');
closeModal.forEach ((modal) => {
    modal.addEventListener('click', () => {
        let modalWindows = document.querySelectorAll('.popup-modal');
        let overlay = document.querySelector('.overlay');
        
        let parent = modal.parentNode;
        id = parent.getAttribute('id');
        
        modalWindows[id - 1].style.display = 'none';
        overlay.style.display = 'none';
    })
});
