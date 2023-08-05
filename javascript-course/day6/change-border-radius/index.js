// selectors 
const box = document.querySelector('.box');
const inputRange = document.querySelector('input');


// event listeners
inputRange.addEventListener('click', changeBorderRadius)


// functions
function changeBorderRadius() {
   box.style.borderRadius = `${inputRange.value}px`

}