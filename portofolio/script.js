//selectors
const closeMenuBtn = document.querySelector('#close-menu-btn');
const openMenuBtn = document.querySelector('#open-menu-btn');
const menu = document.querySelector('ul');


// event listeners

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

// functions

function openMenu() {
   menu.style.display = "flex";
   closeMenuBtn.style.display = "inline-block";
   openMenuBtn.style.display = "none"
}

function closeMenu() {
    menu.style.display = "none";
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "inline-block";
}