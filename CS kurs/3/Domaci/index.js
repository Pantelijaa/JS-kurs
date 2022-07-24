let display = document.querySelector('.size');
display.innerText = `Current size: ${innerWidth} x ${innerHeight} px`;

window.addEventListener('resize',() => {
    display.innerText = `Current size: ${innerWidth}x${innerHeight} px`;
});

let btns = document.querySelectorAll('.click-btn');
let clickTxt = document.querySelector('.click-text');

btns.forEach( btn => {
    btn.addEventListener('click', e => {
        clickTxt.innerText = `Pritisnuo si ${e.target.innerHTML}`;
    })
});

let form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let name = document.querySelector('#text');
    if (!name.value) {
        console.log('Neispravno ime');
    } else {
        console.log('Uspesno si se ulogovao')
    }
});

let opcije = document.querySelector('select');

opcije.addEventListener('change', e => {
    console.log(e.target.value);
})