let homePageLogo = document.querySelector('.lnXdpd');
if (homePageLogo) {
    homePageLogo.src = chrome.runtime.getURL('images/cysecor_logo.png');
    homePageLogo.srcset = chrome.runtime.getURL('images/cysecor_logo.png');
}

let searchLogo = document.querySelector('.logo img');
if (searchLogo) searchLogo.src = chrome.runtime.getURL('images/cysecor_logo.png');

let appBar = document.querySelector('#appbar');
if (appBar) appBar.style.backgroundColor = '#111d29';

let mainSearch = document.querySelector('#rcnt');
if (mainSearch) mainSearch.style.backgroundColor = '#111d29';
 
let footer = document.querySelector('#sfooter');
let fbar = document.querySelector('#fbar');
if (footer) {
    footer.style.backgroundColor = '#111d29';
    fbar.style.backgroundColor = '#111d29';
}



