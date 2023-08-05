//query selectors
const btn = document.querySelector('#save-btn');
const inputEl = document.querySelector('#input-el');
const ulEl = document.querySelector('#ul-el');
const deleteBtn = document.querySelector('#delete-all');


//declarations
let myLeads = [];


// local storage
// localStorage.setItem("myLeads", "www.silva.com")
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear()

// myLeads = JSON.parse(myLeads);
// myLeads.push("www.leads.com");
// console.log(myLeads);

// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads);


let leadsFromLocalstorage = JSON.parse(localStorage.getItem("myLeads"));
//console.log(leadsFromLocalstorage);

if(leadsFromLocalstorage) {
   myLeads = leadsFromLocalstorage;
   renderLeads();
}


// event handlers
btn.addEventListener('click', save);
deleteBtn.addEventListener('dblclick', clearLeads)



// functions
function save() {
   myLeads.push(inputEl.value);
   inputEl.value = "";
   localStorage.setItem("myLeads", JSON.stringify(myLeads));
   renderLeads();

   console.log(localStorage.getItem("myLeads"));
}



function renderLeads() {
   let listItem = "";
   myLeads.forEach(lead => {
      listItem += `
         <li>
            <a target='_blank' href='${lead}'>${lead}</a>
         </li>
      `
   })
   ulEl.innerHTML = listItem; 
}


function clearLeads() {
   localStorage.clear();
   myLeads = [];
   renderLeads();
}
 