// display.js
function setModeColor() {
    const body = document.body;
    const checkMode = document.querySelector('.switch-mode input').checked;
    const input = document.querySelector('.input input');
    const topField = document.getElementsByClassName('top-fleid')[0];
    const bottomField = document.getElementsByClassName('button-fleid')[0];
    const history = document.getElementsByClassName('history')[0];
    const button = document.getElementsByClassName('num');
    const main = document.getElementsByClassName('main-block')[0];
    const symbol = document.getElementsByClassName('symbol');
    // console.log(button);
    if (checkMode) {
        body.style.backgroundColor = '#FFF';
        body.style.color = '#000';
        input.style.color = '#FFF';
        topField.style.backgroundColor = '#101010';
        bottomField.style.backgroundColor = '#000000';
        history.style.backgroundColor = '#141212';
        main.style.backgroundColor = '#000000';
        for (let i = 0; i < button.length; i++) {
            button[i].style.backgroundColor = '#0f0e0e';
        }
        for (let i = 0; i < symbol.length; i++) {
            symbol[i].style.backgroundColor = '#0f0e0e';
        }
    } else {
        body.style.backgroundColor = '#333';
        input.style.color = '#000';
        body.style.color = '#FFF';
        topField.style.backgroundColor = '#b3b2b2';
        bottomField.style.backgroundColor = '#cfcdcd';
        history.style.backgroundColor = '#868080';
        main.style.backgroundColor = '#cfcdcd';
        for (let i = 0; i < button.length; i++) {
            button[i].style.backgroundColor = '#ffffff';
        }
        for (let i = 0; i < symbol.length; i++) {
            symbol[i].style.backgroundColor = '#ffffff';
        }
    } 
}
