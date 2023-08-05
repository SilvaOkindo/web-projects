// selectors
const body = document.querySelector('body');
const btn = document.querySelector('.random-color');


// event listeners
btn.addEventListener('click', changeBgColor);


// functions
function changeBgColor() {
    let color = Math.random().toString(16).substring(2, 8);
    const bgColor  = "#" + color;
    console.log(bgColor);
}