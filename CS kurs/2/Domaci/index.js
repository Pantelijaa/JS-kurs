let allTotal = 0;

const addToCart = (element) => {
    let mainEl = element.closest('.singleItem');
    let price = mainEl.querySelector('.price').innerText;
    price = parseInt(price.substring(price.length - 1));
    let title = mainEl.querySelector('h3').innerText.substring(6);
    let cartItems = document.querySelector('.cartItems');

    allTotal += price;

    cartItems.innerHTML += `
        <div class = 'cartSingleItem'>
            <h4>${title}</h4>
            <p>$${price}</p>
            <button onclick='removeFromCart(this)'class='remove-item'>Ukloni</button>
        </div>
        `;

        element.innerHTML = 'Pogledano';
        element.setAttribute('disabled', 'true');

        document.querySelector('.total').innerText =`Total: $${allTotal}`;
};

const removeFromCart = (element) => {
    let mainEl = element.closest('.cartSingleItem');
    let title = mainEl.querySelector('h4').innerText;
    let films = document.querySelectorAll('.singleItem');
    let price = mainEl.querySelector('p').innerText.substring(1);

    price = parseInt(price);
    allTotal -= price;
    document.querySelector('.total').innerText =`Total: $${allTotal}`;

    mainEl.remove();

    films.forEach((film) => {
        let filmName = film.querySelector('.siContent h3').innerText;
        if (filmName = film) {
            film.querySelector('.actions button').innerText = 'Gledaj';
            film.querySelector('.actions button').removeAttribute('disabled');
        }
    })
};

const openBurger = () => {
    let menu = document.querySelector('.menu');
    let burgerBtn = document.querySelector('.burgerBtn');
    menu.style.display = 'flex';
    burgerBtn.style.backgroundImage = "url('img/menu/closed.jpg')";
    burgerBtn.removeAttribute('onclick');
    burgerBtn.setAttribute('onclick', 'closeBurger()');
}
;
const closeBurger = () => {
    let menu = document.querySelector('.menu');
    let burgerBtn = document.querySelector('.burgerBtn');
    menu.style.display = 'none';
    burgerBtn.style.backgroundImage = "url('img/menu/hamburger.png')";
    burgerBtn.setAttribute('onclick', 'openBurger()');
};