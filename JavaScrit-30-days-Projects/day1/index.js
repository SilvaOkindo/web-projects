// query selectors
const button = document.querySelector('button');
const answer = document.querySelector('.answer');
const conversionOptions = document.querySelector('#currency-converter');
const input = document.querySelector('input');

const CONVERSION_RATE = 138.86; // 1 usd = 136.86

console.log(button)
console.log(answer)
console.log(conversionOptions)
console.log(input)
console.log(button)



// event listeners

conversionOptions.addEventListener('change', togglePlaceholder);
button.addEventListener('click', convertCurrency)



// functions
function togglePlaceholder() {
    if(conversionOptions.value === "ksh") {
        input.placeholder = "Enter currency in USD"
        console.log(conversionOptions.value)
    } else if(conversionOptions.value === "usd") {
        input.placeholder = "Enter currency in Ksh"
    }
}


function convertToKsh() {
    const dollers = input.value;
    const shillings = dollers * CONVERSION_RATE;
    answer.textContent = `ksh ${shillings}`
}

function convertToUSD() {
    const shillings = input.value;
    const dollers = shillings / CONVERSION_RATE;
    answer.textContent = `USD ${dollers}`;
}


function convertCurrency() {
    if(conversionOptions.value === "usd") {
        convertToUSD();
    } else if (conversionOptions.value === "ksh") {
        convertToKsh();
    }
}
