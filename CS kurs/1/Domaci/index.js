const addElement = () => {
    let input = document.querySelector('#myInput').value;
    if (!input || input.length > 32) return;    

    const newElement = document.createElement('div');
    newElement.className = 'newItem';
    newElement.innerHTML = `<p style='display: inline;'>${input}</p>
                            <span style='position: absolute; right: 38vw;' id='closeBtn' onClick='deleteElement(this)'>X</span>`;
    newElement.style.border = '1px solid #fff';
    newElement.style.textAlign = 'left';
    newElement.style.padding = '0.5rem';
    
    document.querySelector('.container').appendChild(newElement);
}

const deleteElement = (e) => {
    const parentEl = e.parentNode;
    parentEl.remove();
}