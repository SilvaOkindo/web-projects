// const container = document.querySelector('.container');
// setTimeout(()=>{
//     container.textContent = 'I am displayed after 2s';
//     setTimeout(()=>console.log("hello 2"), 2000)
// }, 2000);


// function count() {
//     for(i = 0; i < 10; i++) {
//         console.log(i)
//     }
// }
const box = document.querySelector('.box');

window.addEventListener('load', setBackgroundColorOnload)

function setBackgroundColorOnload() {
    const body = document.querySelector('body');
    body.style.background = 'red';
    box.classList.add('animate');
}