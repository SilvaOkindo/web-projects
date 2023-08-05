// query selectors

let count = document.querySelector('#el-counter');
let container = document.querySelector('.container');
let enteries = document.querySelector('#enteries');
let errorMessage = document.querySelector('#error');
let purchaseBtn = document.querySelector('#purchase');
let cardEl = document.querySelector('#card-el');
let sumEl = document.querySelector('#sum-el');
let messageEl = document.querySelector('#message-el');


// variables
let card1 = 0;
let card2 = 0;
let isAlive = true;
let hasBlackjack = false;
let pickNewCard = false;
let sum = 0;
let message = '';
let cards = [];


let counter = 0;





function increment() {
    counter = counter + 1;
    count.textContent = counter;
}


function save() {
    console.log(counter)
    //let h2 = document.createElement('h2');
    //h2.innerText = counter;
    //container.appendChild(h2);
    enteries.textContent += counter + " - ";
    count.textContent = 0;
    counter = 0;
}

// event listeners

purchaseBtn.addEventListener('click', () => {
    errorMessage.textContent = "Something went wrong, please try again";
});


// functions



function getRandomNumber() {
    let randNumber = Math.floor(Math.random() * 13) + 1;


    if(randNumber === 1) {
        return 11
    } else if(randNumber > 10) {
        return 10;
    } else {
        return randNumber;
    }
    
}



function startGame() {
    let card1 = getRandomNumber();
    let card2 = getRandomNumber();
    sum = card1 + card2
    cards = [card1, card2]
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Card: ";
    for(let i = 0; i < cards.length; i++) {
        cardEl.textContent +=  cards[i] + " ";
    }
   
    sumEl.textContent = "Sum: " + sum;

    if(sum > 21) {
        message = "You're out of game."
        isAlive = false
    } else if (sum === 21) {
        message = "You've blackjack";
        hasBlackjack = true;
    } else {
        message = "Pick another card."
        pickNewCard = true
    }

    messageEl.textContent = message;
}

function newCard() {
    
    if(hasBlackjack === false && isAlive === true) {
        let newCard = getRandomNumber();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }   
    
    
}