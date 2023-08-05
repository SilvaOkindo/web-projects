const container = document.querySelector('.container');
const itemsList = document.querySelector('ul');

fetch("http://127.0.0.1:8000/items", {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    }
}).then((response) => {
     return response.json();
}).then((data) => {
   displayData(data);
}).catch((error) => {
  console.log(error);
})
// selectors 

function displayData(data) {
    const items = data;
    let title = document.createElement('h1');
    title.textContent = data[0].title;
    items.forEach(element => {
        console.log(element);
       let item = document.createElement('li');
       item.textContent = element.title;
       itemsList.append(item);
    });
}




