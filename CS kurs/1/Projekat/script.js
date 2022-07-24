const inflationCalculator = () => {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value)

    let years = document.querySelector('#years').value;
    years = parseFloat(years);
    
    //Formula za izracunavanje inflacije
    let worth = money + (money * (inflationRate / 100));

    for (let i = 1; i < years; i++) {
        worth += worth * (inflationRate /100);
    }
    
    worth = worth.toFixed(2);

    let newElement = document.createElement('div');
    newElement.className = 'new-vaule';
    newElement.innerText = `Danasnjih ${money}€ vredi isto kao ${worth}€ za ${years} godina.`;

    document.querySelector('.container').appendChild(newElement);
}