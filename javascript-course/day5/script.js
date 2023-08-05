// selectors
const popWindow = document.querySelector('.popup-content');
const openBtn = document.querySelector('#btn');
const closeBtn = document.querySelector('#close-btn');

// event listeners
closeBtn.addEventListener('click', closePop)
openBtn.addEventListener('click', showPop);




// functions
function showPop() {
   popWindow.classList.add('show');
   //popWindow.classList.add('move-box-down');
   popWindow.classList.remove('hide');
   popWindow.classList.remove('move-box-up');
}

function closePop() {
    popWindow.classList.add('move-box-up');
    // popWindow.classList.add('hide');
 }



