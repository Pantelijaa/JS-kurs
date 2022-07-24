// console.log('1. test');

// let b = document.querySelector('body');

// b.innerHTML = "<p>3. ovo je recenica</p>"

//https://62db2d6ed1d97b9e0c4cac46.mockapi.io

// setTimeout(() => {
//     let t = document.querySelector('body p');
//     t.style.color = 'blue';
// }, 10000);

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = () => {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(xhttp.responseText)
//     }
// }
// xhttp.open('GET', 'https://62db2d6ed1d97b9e0c4cac46.mockapi.io/Users', true);
// xhttp.send();

document.querySelector('#fetchBtn').addEventListener('click', e => {
    e.preventDefault();

    let id = document.querySelector('#userID').value;

    console.log(id)
    let r = fetch('https://62db2d6ed1d97b9e0c4cac46.mockapi.io/Users/' + id)
    .then(response => response.json()).then(data => {
        console.log(data);

        let podaci = document.querySelector('#podaci')

        podaci.innerHTML = `
            <p><b>${data['email']}</b></p>
            <p>${data['username']}</p>
            <p><i>${data['password']}</i></p>`;

    }).catch(error => {
        alert(error);
    })
})



// document.write("4. pisanje");
// document.write("5. pisanje");
// document.write("6. pisanje");