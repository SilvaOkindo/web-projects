import "../styles/style.css";

// query selectors

let cityInput = document.querySelector(".city__input");
const btnSearch = document.querySelector(".search");
const container = document.querySelector('.container');

//api call

const API_KEY = "b6d8e251a65d469580365643231603";


btnSearch.addEventListener('click', ()=>{
  searchWeather(cityInput.value.trim());
})

//let city = 'London';

function searchWeather(city) {
  fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no
  `)
    .then((response) => response.json())
    .then((data) => {
      showData(data);
      console.log(data);
    })
    .catch((error) => console.log(error));
}




function showData(data) {
  const weatherIcon = document.createElement('h1');
  weatherIcon.textContent = data.current.humidity;
  container.append(weatherIcon);
}



const btn = document.querySelector('.btn');
const p = document.querySelector('.para');
btn.addEventListener('click', (event)=>{
  if(event.target.nodeName == 'BUTTON') {
    event.stopPropagation()
  }
  console.log('kkk')
})

p.addEventListener('click',()=>{
  console.log('nnnn')
})

const body = document.querySelector('body');


window.addEventListener('keydown', (event)=>{
  if(event.key == 'v') {
    body.style.background = 'violet';
  }
})


window.addEventListener('keyup', (event)=>{
  if(event.key == 'v') {
    body.style.background = '';
  }
})