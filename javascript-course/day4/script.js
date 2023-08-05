// query selectors
const passBtn = document.querySelector('#pass-btn');
const passwordEl = document.querySelector('#password');


// variable declarations
const str = "ABCDEFGHIJKLMNOPQRSRUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@-+=)(*&^%$£!><?/~[]{};:<"


// event listeners
passBtn.addEventListener('click', generatePassword);


// functions

function generatePassword() {
    let pass = '';
    let password = '';
    for(let i = 1; i < 17; i++) {
        pass = Math.floor(Math.random() * str.length);
        password += str[pass]
    }
    passwordEl.textContent = password;;
}